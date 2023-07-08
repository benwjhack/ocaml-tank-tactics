open! Core
open! Bonsai_web
open Tank_tactics_common
open Bonsai.Let_syntax

let view_message { Message.room = _; author; contents } =
  Vdom.Node.div [ Vdom.Node.textf "%s: %s" author contents ]
;;

let view messages current_room board =
  Vdom.Node.div
    ~attr:(Vdom.Attr.id "messages-list")
    [ Vdom.Node.h1 [ Vdom.Node.text (Room_name.to_string current_room) ]
    ; Vdom.Node.div (List.map messages ~f:view_message)
    ; Vdom.Node.div [ Board.to_html board ]
    ]
;;

let component ~messages ~current_room ~board =
  let%arr messages = messages
  and current_room = current_room
  and board = board in
  view messages current_room board
;;
