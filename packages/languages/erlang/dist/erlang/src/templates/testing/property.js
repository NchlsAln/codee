"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return [
        "-module(prop_demo).",
        "-export([prop_reverse/0]).",
        "prop_reverse() ->",
        "  ?FORALL(S, list(char()), lists:reverse(lists:reverse(S)) =:= S)."
    ].join("\n");
}
