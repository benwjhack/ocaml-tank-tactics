open! Core
open! Bonsai_web
open! Tank_tactics_common

val component : board:Board.t Value.t -> Vdom.Node.t Computation.t
