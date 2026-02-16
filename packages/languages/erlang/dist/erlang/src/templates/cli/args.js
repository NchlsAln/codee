"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "-module(cli_args).",
        "-export([run/1]).",
        "run(Args) ->",
        "  io:format(\"~p~n\", [Args])."
    ].join("\n");
}
