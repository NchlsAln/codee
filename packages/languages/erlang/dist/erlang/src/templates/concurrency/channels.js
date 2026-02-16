"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "-module(channel_demo).",
        "-export([run/0]).",
        "run() ->",
        "  Self = self(),",
        "  spawn(fun() -> Self ! {msg, 1} end),",
        "  receive {msg, N} -> N end."
    ].join("\n");
}
