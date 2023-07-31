open! Core

module Tile : sig
  type t [@@deriving sexp, bin_io]

  module Type : sig
    type t = int [@@deriving sexp]
  end

  (* bhack: types don't currently represent anything, just a placeholder *)
  val type_of : t -> Type.t
end

type t [@@deriving sexp, bin_io]

val empty : t
val default : t
val tile_at : x:int -> y:int -> t -> Tile.t option
val tiles : t -> Tile.t list list
val to_string : t -> string
