open! Core
open Async
open Deferred.Or_error.Let_syntax
open Tank_tactics_common.Protocol

module Constants = struct
  let default_where_to_connect =
    Host_and_port.create ~host:"localhost" ~port:1984
    |> Tcp.Where_to_connect.of_host_and_port
  ;;
end

let make_command ~f =
  Command.async_or_error
    ~summary:"TODO"
    (let%map_open.Command where_to_connect =
       flag_optional_with_default_doc
         "where-to-connect"
         ~default:Constants.default_where_to_connect
         (Command.Param.Arg_type.create (fun s ->
            Host_and_port.of_string s |> Tcp.Where_to_connect.of_host_and_port))
         Tcp.Where_to_connect.sexp_of_inet
         ~doc:"where the server is (HOST:PORT)"
     in
     fun () ->
       let%bind () =
         let%map.Deferred or_error =
           Rpc.Connection.with_client where_to_connect f
           |> Deferred.Or_error.of_exn_result
         in
         Or_error.join or_error
       in
       return ())
;;

let list_rooms_command =
  make_command ~f:(fun conn ->
    let%map response = Rpc.Rpc.dispatch List_rooms.t conn () in
    Sexp.to_string_hum
      [%sexp
        (response
          : Tank_tactics_common.Room.Externals.t Tank_tactics_common.Room_name.Map.t)]
    |> print_endline)
;;

let command = Command.group ~summary:"TODO" [ "list-rooms", list_rooms_command ]
let () = Command_unix.run command