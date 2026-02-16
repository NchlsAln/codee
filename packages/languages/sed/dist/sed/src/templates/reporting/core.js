"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingTemplate = reportingTemplate;
function reportingTemplate() {
    return [
        "sed -n '=' app.log | tail -n 1",
        "sed -n '1,5p' report.txt"
    ].join("\n");
}
