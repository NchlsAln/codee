"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpTemplate = httpTemplate;
function httpTemplate() {
    return [
        "open Cohttp_lwt_unix",
        "let () = ignore (Client.get (Uri.of_string \"https://example.com\"))",
        "let server = Server.make ~callback:(fun _ _ -> Server.respond_string ~status:`OK ~body:\"ok\" ()) ()",
        "ignore server"
    ].join("\n");
}
