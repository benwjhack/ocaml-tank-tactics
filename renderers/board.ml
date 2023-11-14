open! Core

include struct
  open Tank_tactics_common
  module Board = Board
  open Bonsai_web
  module Vdom = Vdom
end

let render_board (t : Board.t) =
  let tiles = Board.tiles t in
  List.map tiles ~f:(fun ys ->
    List.map ys ~f:(fun tile ->
      let type_ = Board.Tile.type_of tile in
      Int.to_string type_ |> Vdom.Node.(text) |> List.return |> Vdom.Node.(td)))
  |> List.map ~f:Vdom.Node.tr
  |> Vdom.Node.table
;;
