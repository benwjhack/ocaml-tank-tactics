open! Core
open! Bonsai_web
open Tank_tactics_common

val component
  :  messages:Message.t list Value.t
  -> current_room:Room_name.t Value.t
  -> board:Board.t Value.t
  -> Vdom.Node.t Computation.t
