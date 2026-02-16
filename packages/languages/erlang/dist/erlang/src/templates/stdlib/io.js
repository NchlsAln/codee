"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return [
        "-module(io_demo).",
        "-export([run/0]).",
        "run() ->",
        "  {ok, File} = file:open(\"data.txt\", [append]),",
        "  io:format(File, \"hello~n\", []),",
        "  file:close(File),",
        "  {ok, Bin} = file:read_file(\"data.txt\"),",
        "  io:format(\"~s\", [Bin])."
    ].join("\n");
}
