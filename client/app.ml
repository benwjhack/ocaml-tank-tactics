open! Core
open! Bonsai_web
open Tank_tactics_common

let component
  ~room_list
  ~board_list
  ~current_room
  ~messages
  ~refresh_rooms
  ~change_room
  ~send_message
  ~send_username
  =
  let open Bonsai.Let_syntax in
  let%sub send_message =
    match%arr current_room with
    | Some room -> fun contents -> send_message ~room ~contents
    | None -> Fn.const Effect.never
  in
  let%sub send_username =
    match%arr current_room with
    | Some _room -> fun contents -> send_username ~contents
    | None -> Fn.const Effect.never
  in
  let%sub current_room =
    let%arr current_room = current_room in
    Option.value current_room ~default:(Room_name.of_string "no room selected")
  in
  let%sub board =
    let%arr current_room = current_room
    and board_list = board_list in
    Room_name.Map.find board_list current_room |> Option.value ~default:Board.empty
  in
  let%sub rooms_list = Room_list_panel.component ~room_list ~refresh_rooms ~change_room in
  let%sub compose_panel = Compose_message.component ~send_message in
  let%sub messages_panel = Messages_panel.component ~messages ~current_room ~board in
  let%sub username_panel = Compose_username.component ~send_username in
  let%arr rooms_list = rooms_list
  and compose_panel = compose_panel
  and messages_panel = messages_panel
  and username_panel = username_panel in
  Vdom.Node.div
    ~attr:(Vdom.Attr.id "container")
    [ rooms_list
    ; Vdom.Node.div
        ~attr:(Vdom.Attr.id "message-container")
        [ messages_panel; compose_panel; username_panel ]
    ]
;;
