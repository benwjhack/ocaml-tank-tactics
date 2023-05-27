open! Core

type t =
  { room : Room_name.t
  ; author : string
  ; contents : string
  }
[@@deriving sexp, bin_io, fields]
