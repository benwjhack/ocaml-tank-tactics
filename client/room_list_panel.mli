open! Core
open! Bonsai_web
open Tank_tactics_common

val component
  :  room_list:Room.Externals.t Room_name.Map.t Value.t
  -> refresh_rooms:unit Effect.t
  -> change_room:(Room_name.t -> unit Effect.t)
  -> Vdom.Node.t Computation.t
