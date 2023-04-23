open! Core
open! Async
open Tank_tactics_common

let get_board global_state : _ =
  ignore (global_state : Global_state.t);
  Rpc.Rpc.implement Protocol.Get_board.Stable.V1.t (fun _state () ->
    return { Board.tiles = [ [ None ]; [ Some 1; None ] ] })
;;

let implementations global_state =
  Rpc.Implementations.create_exn
    ~implementations:[ get_board global_state ]
    ~on_unknown_rpc:`Continue
;;
