"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.automationTemplate = automationTemplate;
function automationTemplate() {
    return [
        "set -euo pipefail",
        "for file in *.log; do",
        "  [ -s \"$file\" ] && gzip -9 \"$file\"",
        "done"
    ].join("\n");
}
