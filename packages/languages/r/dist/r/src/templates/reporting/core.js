"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingTemplate = reportingTemplate;
function reportingTemplate() {
    return [
        "rmarkdown::render('report.Rmd')",
        "sessionInfo()"
    ].join("\n");
}
