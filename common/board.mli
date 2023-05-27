open! Core

module Tile : sig
  type t [@@deriving sexp, bin_io]

  (* bhack: types don't currently represent anything, just a placeholder *)
  val type_of : t -> int
end

type t [@@deriving sexp, bin_io]

val default : t
val tile_at : x:int -> y:int -> t -> Tile.t option
