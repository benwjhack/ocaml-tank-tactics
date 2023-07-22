open! Core
open Bonsai_web

module Tile = struct
  type t = { type_ : int } [@@deriving sexp, bin_io, fields]

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

let to_html { tiles; _ } =
  List.map tiles ~f:(fun ys ->
    List.map ys ~f:(fun tile ->
      let type_ = Tile.type_of tile in
      Int.to_string type_))
  |> List.map ~f:(fun _type -> _type |> String.concat ~sep:"," |> Vdom.Node.Text)
  |> Vdom.Node.div
;;
