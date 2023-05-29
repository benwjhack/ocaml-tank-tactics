open! Core
open! Async
open Tank_tactics_common

let message_stream global_state =
  let bus_read = Bus.read_only global_state.Global_state.message_bus in
  let f _user_state () = Async_bus.pipe1_exn bus_read [%here] |> Deferred.Result.return in
  Rpc.Pipe_rpc.implement Protocol.Message_stream.t f
;;

let message_request global_state =
  let messages = Global_state.messages global_state in
  let f _user_state room =
    match Hashtbl.find messages room with
    | None -> return []
    | Some q -> return (Queue.to_list q)
  in
  Rpc.Rpc.implement Protocol.Messages_request.t f
;;

let send_message global_state =
  let messages = Global_state.messages global_state in
  let bus = global_state.Global_state.message_bus in
  let f user_state message =
    let author = !(user_state.User_state.user) in
    let message = { message with Message.author } in
    let room = Message.room message in
    match Hashtbl.find messages room with
    | Some messages ->
      Queue.enqueue messages message;
      Bus.write bus message;
      Deferred.Or_error.return ()
    | None -> Deferred.Or_error.error_s [%message "room not found" (room : Room_name.t)]
  in
  Rpc.Rpc.implement Protocol.Send_message.t f
;;

let create_room global_state =
  let messages = Global_state.messages global_state in
  let f _user_state room =
    match Hashtbl.add messages ~key:room ~data:(Queue.create ()) with
    | `Ok -> Deferred.Or_error.return ()
    | `Duplicate ->
      Deferred.Or_error.error_s [%message "duplicate room" (room : Room_name.t)]
  in
  Rpc.Rpc.implement Protocol.Create_room.t f
;;

let send_username =
  let f user_state username =
    user_state.User_state.user := username.Username.contents;
    Deferred.Or_error.return ()
  in
  Rpc.Rpc.implement Protocol.Send_username.t f
;;

let list_rooms global_state =
  let rooms = Global_state.rooms global_state in
  let f _user_state () = return (Hashtbl.keys rooms) in
  Rpc.Rpc.implement Protocol.List_rooms.t f
;;

let list_boards global_state =
  let boards = Global_state.boards global_state in
  let f _user_state () = return boards in
  Rpc.Rpc.implement Protocol.List_boards.t f
;;

let implementations global_state =
  Rpc.Implementations.create_exn
    ~implementations:
      [ message_stream global_state
      ; message_request global_state
      ; send_message global_state
      ; create_room global_state
      ; list_rooms global_state
      ; send_username
      ; list_boards global_state
      ]
    ~on_unknown_rpc:`Continue
;;
