open! Core

module Internals = struct
  type t = { messages : Message.t Queue.t } [@@deriving fields, sexp_of]

  let create = Fields.create
end

module Externals = struct
  type t = { board : Board.t } [@@deriving fields, sexp_of, bin_io]

  let create = Fields.create
end

type t =
  { internals : Internals.t
  ; externals : Externals.t
  }
[@@deriving fields, sexp_of]

let create ~messages ~board =
  let internals = Internals.create ~messages
  and externals = Externals.create ~board in
  Fields.create ~internals ~externals
;;

let board { externals; _ } = Externals.board externals
