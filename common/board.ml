open! Core

module Tile = struct
  type t = { type_ : int } [@@deriving sexp, bin_io, fields]

  let type_of { type_; _ } = type_
end

type t = { tiles : Tile.t list list } [@@deriving sexp, bin_io, fields]

let default =
  let a = Tile.{ type_ = 0 }
  and b = Tile.{ type_ = 1 } in
  { tiles = [ [ a; a ]; [ b; a ] ] }
;;

let tile_at ~x ~y t =
  let { tiles = xs; _ } = t in
  let%bind.Option ys = List.nth xs x in
  List.nth ys y
;;
