"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "-module(jwt_demo).",
        "-export([run/0]).",
        "run() ->",
        "  %% Placeholder for jose_jwt",
        "  ok."
    ].join("\n");
}
