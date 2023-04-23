open! Core
open! Async
open Tank_tactics_common

let get_board global_state : _ =
  Rpc.Rpc.implement Protocol.Get_board.Stable.V1.t (fun _state () ->
    let board = !(global_state.Global_state.board) in
    global_state.board := { Board.tiles = [ Some 1 ] :: board.tiles };
    return board)
;;

let implementations global_state =
  Rpc.Implementations.create_exn
    ~implementations:[ get_board global_state ]
    ~on_unknown_rpc:`Continue
;;
