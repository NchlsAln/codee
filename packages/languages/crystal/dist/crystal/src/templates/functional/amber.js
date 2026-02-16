"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amberTemplate = amberTemplate;
function amberTemplate() {
    return [
        "# Amber route example",
        "get \"/health\" do |env|",
        "  env.response.print \"ok\"",
        "end"
    ].join("\n");
}
