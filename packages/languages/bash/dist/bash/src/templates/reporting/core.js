"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingTemplate = reportingTemplate;
function reportingTemplate() {
    return [
        "count=$(grep -c \"ERROR\" app.log)",
        "printf \"Errors: %s\\n\" \"$count\"",
        "printf \"Report generated at %s\\n\" \"$(date -Iseconds)\""
    ].join("\n");
}
