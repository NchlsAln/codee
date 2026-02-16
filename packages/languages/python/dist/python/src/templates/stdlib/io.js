"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return [
        "from pathlib import Path",
        "import json",
        "",
        "data_path = Path('data.json')",
        "payload = {\"ok\": True, \"count\": 3}",
        "",
        "data_path.write_text(json.dumps(payload))",
        "loaded = json.loads(data_path.read_text())",
        "print(loaded)"
    ].join("\n");
}
