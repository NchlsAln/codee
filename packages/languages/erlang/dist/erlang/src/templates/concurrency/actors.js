"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
    return [
        "-module(actor_demo).",
        "-export([start/0]).",
        "start() ->",
        "  Pid = spawn(fun loop/0),",
        "  Pid ! {ping, self()},",
        "  receive pong -> ok end.",
        "loop() ->",
        "  receive {ping, From} -> From ! pong, loop() end."
    ].join("\n");
}
