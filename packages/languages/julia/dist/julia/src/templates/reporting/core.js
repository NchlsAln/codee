"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingTemplate = reportingTemplate;
function reportingTemplate() {
    return [
        "using Weave",
        "weave(\"report.jmd\")"
    ].join("\n");
}
