"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "-module(proto_demo).",
        "-export([run/0]).",
        "run() ->",
        "  %% Placeholder for gpb or erl_protobuf",
        "  ok."
    ].join("\n");
}
