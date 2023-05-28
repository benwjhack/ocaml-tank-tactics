open! Core

module Internals : sig
  type t

  val create : messages:Message.t Queue.t -> t
  val messages : t -> Message.t Queue.t
end

module Externals : sig
  type t [@@deriving sexp_of, bin_io]

  val board : t -> Board.t
end

type t

val create : messages:Message.t Queue.t -> board:Board.t -> t
val board : t -> Board.t
val internals : t -> Internals.t
val externals : t -> Externals.t