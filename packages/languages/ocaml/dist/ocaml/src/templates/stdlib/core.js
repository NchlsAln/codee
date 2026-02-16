"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stdlibTemplate = stdlibTemplate;
function stdlibTemplate() {
    return [
        "let arr = [|1; 2; 3|]",
        "let upper = String.uppercase_ascii \"ocaml\"",
        "module SMap = Map.Make(String)",
        "let map = SMap.add \"a\" 1 SMap.empty",
        "let () = let oc = open_out \"data.txt\" in output_string oc \"ok\\n\"; close_out oc",
        "let data = let ic = open_in \"data.txt\" in let s = input_line ic in close_in ic; s",
        "let root = sqrt 81.0",
        "ignore arr; ignore upper; ignore map; ignore data; ignore root"
    ].join("\n");
}
