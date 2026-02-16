"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "open Lwt.Infix",
        "let fetch () = Lwt.return \"ok\"",
        "let () =",
        "  Lwt_main.run (fetch () >|= print_endline)"
    ].join("\n");
}
