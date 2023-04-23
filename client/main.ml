open! Core
open! Async_kernel
open! Bonsai_web
open Async_js
open Tank_tactics_common

let on_request_board_update ~conn ~board_var () =
  let%map board = Rpc.Rpc.dispatch_exn Protocol.Get_board.Stable.V1.t conn () in
  Bonsai.Var.set board_var board
;;

let get_board ~conn ~board_var =
  let on_request_board_update = on_request_board_update ~conn ~board_var in
  let dispatch = on_request_board_update |> Effect.of_deferred_fun in
  fun () -> dispatch ()
;;

let run () =
  Async_js.init ();
  let%bind conn = Rpc.Connection.client_exn () in
  let _get_board = get_board ~conn in
  let board_var = Bonsai.Var.create { Board.tiles = [ [ None; Some 1 ] ] } in
  let board = Bonsai.Var.value board_var in
  let (_ : _ Start.Handle.t) =
    Start.start
      Start.Result_spec.just_the_view
      ~bind_to_element_with_id:"app"
      (let open! Bonsai.Let_syntax in
      App.component ~board)
  in
  don't_wait_for (on_request_board_update ~conn ~board_var ());
  return ()
;;

let () = don't_wait_for (run ())
