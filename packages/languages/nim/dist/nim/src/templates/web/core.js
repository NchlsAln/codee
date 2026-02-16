"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webTemplate = webTemplate;
function webTemplate() {
    return [
        "import jester",
        "routes:",
        "  get \"/health\":",
        "    resp \"ok\"",
        "  get \"/users\":",
        "    resp \"[]\""
    ].join("\n");
}
