open! Core
open! Bonsai_web
open Tank_tactics_common

val component
  :  room_list:Room_name.t list Value.t
  -> refresh_rooms:unit Effect.t
  -> change_room:(Room_name.t -> unit Effect.t)
  -> Vdom.Node.t Computation.t
