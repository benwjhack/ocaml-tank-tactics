open! Core
open! Async
open Tank_tactics_common

type t =
  { message_bus : (Message.t -> unit) Bus.Read_write.t
  ; rooms : Room.t Room_name.Table.t
  }
[@@deriving fields]

let messages { rooms; _ } =
  Room_name.Table.map rooms ~f:(fun room ->
    room |> Room.internals |> Room.Internals.messages)
;;

let boards { rooms; _ } = Room_name.Table.map rooms ~f:Room.board

let create () =
  let message_bus =
    Bus.create
      [%here]
      Arity1
      ~on_subscription_after_first_write:Allow
      ~on_callback_raise:(fun error -> print_s [%sexp (error : Error.t)])
  in
  let initial_messages =
    [ Message.
        { room = Room_name.of_string "incr_dom-room"
        ; author = "Bonsai Developers"
        ; contents = "hello world!"
        }
    ; Message.
        { room = Room_name.of_string "incr_dom-room"
        ; author = "Bonsai Developers"
        ; contents =
            "For deep and complex security purposes your messages will be hashed so that \
             you can't use this platform for actual chatting"
        }
    ]
  in
  let rooms =
    let open Room in
    let default_room =
      let messages = Queue.of_list initial_messages in
      let internals = Internals.create ~messages in
      let board = Board.default in
      Room.create ~internals ~board
    in
    Room_name.Table.of_alist_exn
      [ Room_name.of_string "incr_dom-room", default_room
      ; Room_name.of_string "bonsai-room", default_room
      ]
  in
  { message_bus; rooms }
;;
