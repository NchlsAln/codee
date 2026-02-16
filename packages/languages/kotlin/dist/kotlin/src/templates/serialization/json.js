"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTemplate = jsonTemplate;
function jsonTemplate() {
    return [
        "import kotlinx.serialization.Serializable",
        "import kotlinx.serialization.encodeToString",
        "import kotlinx.serialization.json.Json",
        "",
        "@Serializable",
        "data class User(val id: Int, val email: String)",
        "",
        "val payload = Json.encodeToString(User(1, \"ada@example.com\"))",
        "println(payload)"
    ].join("\n");
}
