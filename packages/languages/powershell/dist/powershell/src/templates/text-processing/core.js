"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textProcessingTemplate = textProcessingTemplate;
function textProcessingTemplate() {
    return [
        "Get-Content app.log | Select-String -Pattern 'ERROR|WARN'",
        "Get-Content data.csv | Select-Object -First 5",
        "\"a  b   c\" -replace '\\s+', ' '"
    ].join("\n");
}
