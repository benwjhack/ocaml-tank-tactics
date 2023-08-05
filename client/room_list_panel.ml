open! Core
open! Bonsai_web
open Tank_tactics_common
open Bonsai.Let_syntax

let component ~room_list ~refresh_rooms ~change_room =
  let%arr room_list = room_list in
  let room_list = Room_name.Map.keys room_list in
  let room_header =
    Vdom.Node.h2
      [ Vdom.Node.text "Room_names"
      ; Vdom_input_widgets.Button.simple
          ~extra_attrs:[ Vdom.Attr.id "refresh-button" ]
          ~on_click:(fun () -> refresh_rooms)
          "↻"
      ]
  in
  let room_switching_buttons =
    List.map room_list ~f:(fun room ->
      Vdom_input_widgets.Button.simple
        ~on_click:(fun () -> change_room room)
        (Room_name.to_string room))
  in
  Vdom.Node.div
    ~attr:(Vdom.Attr.id "room-list-panel")
    ([ room_header ] @ room_switching_buttons)
;;
