"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jesterTemplate = jesterTemplate;
function jesterTemplate() {
    return [
        "import jester",
        "routes:",
        "  get \"/health\":",
        "    resp \"ok\""
    ].join("\n");
}
