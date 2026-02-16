export function routingTemplate(): string {
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
