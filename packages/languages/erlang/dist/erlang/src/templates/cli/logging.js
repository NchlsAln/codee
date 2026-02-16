"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "-module(cli_logging).",
        "-export([run/0]).",
        "run() ->",
        "  error_logger:info_msg(\"started~n\")."
    ].join("\n");
}
