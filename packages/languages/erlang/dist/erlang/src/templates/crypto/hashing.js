"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "-module(hash_demo).",
        "-export([run/0]).",
        "run() ->",
        "  Hash = crypto:hash(sha256, <<\"secret\">>),",
        "  io:format(\"~p~n\", [Hash])."
    ].join("\n");
}
