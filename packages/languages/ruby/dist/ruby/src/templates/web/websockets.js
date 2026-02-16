"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return [
        "require 'faye/websocket'",
        "ws = Faye::WebSocket.new(env)",
        "ws.on :message do |event|",
        "  ws.send(event.data)",
        "end"
    ].join("\n");
}
