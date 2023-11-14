open! Core

type t =
  { author : string
  ; contents : string
  }
[@@deriving sexp, bin_io, fields]
