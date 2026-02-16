"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializationTemplate = serializationTemplate;
function serializationTemplate() {
    return [
        "open Yojson.Safe",
        "let json = `Assoc [(\"ok\", `Bool true)]",
        "let data = to_string json",
        "let binary = Marshal.to_string json []",
        "let _ = (data, binary)"
    ].join("\n");
}
