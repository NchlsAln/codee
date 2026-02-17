"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastApiAdvancedTemplate = fastApiAdvancedTemplate;
function fastApiAdvancedTemplate() {
  return [
    "from fastapi import FastAPI, BackgroundTasks, WebSocket, Depends",
    "from pydantic import BaseModel",
    "",
    "app = FastAPI()",
    "",
    "class Item(BaseModel):",
    "    name: str",
    "    qty: int",
    "",
    "def get_config():",
    "    return {'region': 'us-east-1'}",
    "",
    "@app.post('/items')",
    "async def create_item(item: Item, bg: BackgroundTasks, cfg=Depends(get_config)):",
    "    bg.add_task(lambda: print('processed', item.name, cfg))",
    "    return {'ok': True}",
    "",
    "@app.websocket('/ws')",
    "async def ws_endpoint(ws: WebSocket):",
    "    await ws.accept()",
    "    await ws.send_text('ready')",
    "    await ws.close()",
  ].join("\n");
}
