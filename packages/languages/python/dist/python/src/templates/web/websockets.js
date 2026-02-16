"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return [
        "from fastapi import FastAPI, WebSocket",
        "",
        "app = FastAPI()",
        "",
        "@app.websocket('/ws')",
        "async def websocket_endpoint(websocket: WebSocket):",
        "    await websocket.accept()",
        "    while True:",
        "        data = await websocket.receive_text()",
        "        await websocket.send_text(f'echo: {data}')"
    ].join("\n");
}
