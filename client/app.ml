open! Core
open! Bonsai_web
open! Tank_tactics_common

let component ~board =
  let open Bonsai.Let_syntax in
  let%sub board = Board_panel.component ~board in
  let%arr board = board in
  Vdom.Node.div ~attr:(Vdom.Attr.id "container") [ board ]
;;
