open! Core
open! Bonsai_web

val component
  :  send_username:(string -> unit Effect.t) Value.t
  -> Vdom.Node.t Computation.t
