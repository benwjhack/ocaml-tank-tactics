open! Core
open! Async_rpc_kernel

module Get_board : sig
  module Stable : sig
    module V1 : sig
      val t : (unit, Board.t) Rpc.Rpc.t
    end
  end
end
