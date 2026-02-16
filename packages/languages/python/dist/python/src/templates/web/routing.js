"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "from fastapi import APIRouter",
        "",
        "router = APIRouter()",
        "",
        "@router.get('/items/{item_id}')",
        "def get_item(item_id: int) -> dict:",
        "    return {\"id\": item_id}"
    ].join("\n");
}
