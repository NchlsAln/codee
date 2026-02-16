"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTemplate = jsonTemplate;
function jsonTemplate() {
    return [
        "payload = %{id: 1, name: \"Ada\"}",
        "json = Jason.encode!(payload)",
        "data = Jason.decode!(json)",
        "IO.inspect(data)"
    ].join("\n");
}
