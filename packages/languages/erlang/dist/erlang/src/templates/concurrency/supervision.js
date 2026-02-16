"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supervisionTemplate = supervisionTemplate;
function supervisionTemplate() {
    return [
        "-module(supervisor_demo).",
        "-export([start/0]).",
        "start() ->",
        "  Supervisor = {my_sup, {one_for_one, 1, 5}, []},",
        "  supervisor:start_link(Supervisor)."
    ].join("\n");
}
