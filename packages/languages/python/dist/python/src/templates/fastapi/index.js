"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastApiTemplate = fastApiTemplate;
function fastApiTemplate() {
    return [
        "from fastapi import FastAPI",
        "from pydantic import BaseModel",
        "",
        "app = FastAPI()",
        "",
        "class Health(BaseModel):",
        "    ok: bool",
        "",
        "@app.get(\"/health\", response_model=Health)",
        "def health_check() -> Health:",
        "    return Health(ok=True)"
    ].join("\n");
}
