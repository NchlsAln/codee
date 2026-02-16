"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingTemplate = reportingTemplate;
function reportingTemplate() {
    return [
        "publish('report.m', 'pdf');"
    ].join("\n");
}
