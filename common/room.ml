open! Core

module Internals = struct
  type t = { messages : Message.t Queue.t } [@@deriving fields]

  let create = Fields.create
end

type t =
  { internals : Internals.t
  ; board : Board.t
  }
[@@deriving fields]

let create = Fields.create