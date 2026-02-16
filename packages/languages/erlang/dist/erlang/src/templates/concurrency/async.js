"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "-module(async_demo).",
        "-export([run/0]).",
        "run() ->",
        "  Parent = self(),",
        "  spawn(fun() -> Parent ! {done, 42} end),",
        "  receive",
        "    {done, Value} -> Value",
        "  end."
    ].join("\n");
}
