open! Core
open! Async_rpc_kernel

module Message_stream : sig
  val t : (unit, Message.t, unit) Rpc.Pipe_rpc.t
end

module Messages_request : sig
  val t : (Room_name.t, Message.t list) Rpc.Rpc.t
end

module Send_message : sig
  val t : (Message.t, unit Or_error.t) Rpc.Rpc.t
end

module Send_username : sig
  val t : (Username.t, unit Or_error.t) Rpc.Rpc.t
end

module Create_room : sig
  val t : (Room_name.t, unit Or_error.t) Rpc.Rpc.t
end

module List_rooms : sig
  val t : (unit, Room.Externals.t Room_name.Map.t) Rpc.Rpc.t
end
