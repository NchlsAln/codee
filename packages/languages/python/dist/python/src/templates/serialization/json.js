"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTemplate = jsonTemplate;
function jsonTemplate() {
    return [
        "import json",
        "from dataclasses import dataclass, asdict",
        "",
        "@dataclass",
        "class User:",
        "    id: int",
        "    email: str",
        "",
        "payload = json.dumps(asdict(User(id=1, email='ada@example.com')))",
        "print(payload)"
    ].join("\n");
}
