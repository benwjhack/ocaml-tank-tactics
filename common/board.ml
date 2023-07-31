open! Core

module Tile = struct
  module Type = struct
    type t = int [@@deriving sexp, bin_io]
  end

  type t = { type_ : Type.t } [@@deriving sexp, bin_io, fields]

  let type_of { type_; _ } = type_
end

type t = { tiles : Tile.t list list } [@@deriving sexp, bin_io, fields]

let empty = { tiles = [ [] ] }

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

let to_string { tiles; _ } =
  List.map tiles ~f:(fun ys ->
    List.map ys ~f:(fun tile ->
      let type_ = Tile.type_of tile in
      Int.to_string type_))
  |> List.map ~f:(String.concat ~sep:",")
  |> String.concat ~sep:"\n"
;;

let tiles { tiles; _ } = tiles
