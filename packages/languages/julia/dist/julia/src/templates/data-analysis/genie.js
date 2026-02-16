"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genieTemplate = genieTemplate;
function genieTemplate() {
    return [
        "using Genie",
        "route(\"/health\") do",
        "  \"ok\"",
        "end",
        "up()"
    ].join("\n");
}
