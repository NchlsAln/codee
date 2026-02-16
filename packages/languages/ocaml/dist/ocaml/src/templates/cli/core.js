"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliTemplate = cliTemplate;
function cliTemplate() {
    return [
        "open Arg",
        "let name = ref \"\"",
        "let specs = [\"-n\", Set_string name, \"name\"]",
        "let () = parse specs (fun _ -> ()) \"demo\"",
        "open Yojson.Safe",
        "let cfg = from_string \"{\\\"ok\\\":true}\"",
        "ignore cfg"
    ].join("\n");
}
