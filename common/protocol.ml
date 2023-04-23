open! Core
open! Async_rpc_kernel

module Get_board = struct
  let name = "get_board"

  module Stable = struct
    module V1 = struct
      let t =
        Rpc.Rpc.create
          ~name
          ~version:0
          ~bin_query:[%bin_type_class: unit]
          ~bin_response:[%bin_type_class: Board.t]
      ;;
    end
  end
end
