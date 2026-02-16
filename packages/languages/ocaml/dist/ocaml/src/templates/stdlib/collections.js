"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "let nums = [1; 2; 3]",
        "let doubled = List.map (fun n -> n * 2) nums",
        "module IntMap = Map.Make(Int)",
        "let m = IntMap.(empty |> add 1 \"one\")",
        "doubled |> List.iter print_int"
    ].join("\n");
}
