"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kemalTemplate = kemalTemplate;
function kemalTemplate() {
    return [
        "require \"kemal\"",
        "get \"/health\" do",
        "  \"ok\"",
        "end",
        "Kemal.run"
    ].join("\n");
}
