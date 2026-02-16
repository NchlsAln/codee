"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return [
        "defmodule ChatSocket do",
        "  use Phoenix.Socket",
        "  channel \"room:*\", ChatChannel",
        "end"
    ].join("\n");
}
