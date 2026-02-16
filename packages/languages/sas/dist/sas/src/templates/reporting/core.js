"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingTemplate = reportingTemplate;
function reportingTemplate() {
    return [
        "ods pdf file='report.pdf';",
        "proc report data=work.cleaned; run;",
        "ods pdf close;"
    ].join("\n");
}
