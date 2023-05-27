open! Core
open! Async
open Tank_tactics_common

type t =
  { message_bus : (Message.t -> unit) Bus.Read_write.t
  ; rooms : Room.t Room_name.Table.t
  }

val messages : t -> Message.t Queue.t Room_name.Table.t
val create : unit -> t
