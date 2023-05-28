open! Core
open! Bonsai_web
open Tank_tactics_common

val component
  :  room_list:Room_name.t list Value.t
  -> board_list:Board.t Room_name.Map.t Value.t
  -> current_room:Room_name.t option Value.t
  -> messages:Message.t list Value.t
  -> refresh_rooms:unit Effect.t
  -> change_room:(Room_name.t -> unit Effect.t)
  -> send_message:(room:Room_name.t -> contents:string -> unit Effect.t)
  -> send_username:(contents:string -> unit Effect.t)
  -> Vdom.Node.t Computation.t
