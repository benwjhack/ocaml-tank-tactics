open! Core
open! Async

type t =
  { user : string ref
  ; connection : Rpc.Connection.t
  }
