open! Core

module Internals = struct
  type t =
    { messages : Message.t Queue.t
    ; mutable users : User.t list
    }
  [@@deriving fields, sexp_of]

  let create = Fields.create
end

module Externals = struct
  type t = { mutable board : Board.t } [@@deriving fields, sexp_of, bin_io]

  let create = Fields.create
end

type t =
  { internals : Internals.t
  ; externals : Externals.t
  }
[@@deriving fields, sexp_of]

let create ~messages ~board ~users =
  let internals = Internals.create ~messages ~users
  and externals = Externals.create ~board in
  Fields.create ~internals ~externals
;;

let board { externals; _ } = Externals.board externals

let%expect_test "sexp" =
  let messages =
    let q = Queue.create () in
    Queue.enqueue
      q
      Message.
        { author = "me!"
        ; room = Room_name.of_string "this_room"
        ; contents = "message contents"
        };
    q
  and board = Board.default
  and users = [ User.create () ] in
  let example = create ~messages ~board ~users in
  print_s [%sexp (example : t)];
  [%expect
    {|
    ((internals
      ((messages (((room this_room) (author me!) (contents "message contents"))))
       (users (()))))
     (externals
      ((board ((tiles ((((type_ 0)) ((type_ 0))) (((type_ 1)) ((type_ 0)))))))))) |}]
;;
