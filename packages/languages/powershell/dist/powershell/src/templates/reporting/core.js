"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingTemplate = reportingTemplate;
function reportingTemplate() {
    return [
        "$summary = Get-Process | Group-Object ProcessName | Sort-Object Count -Descending",
        "$summary | Select-Object -First 5 | ConvertTo-Json | Out-File report.json",
        "$summary | Select-Object -First 5 | ConvertTo-Html | Out-File report.html"
    ].join("\n");
}
