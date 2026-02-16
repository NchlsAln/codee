"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataExtractionTemplate = dataExtractionTemplate;
function dataExtractionTemplate() {
    return [
        "$rows = Import-Csv .\\data.csv",
        "$rows | Where-Object { $_.Status -eq 'ERROR' }",
        "$json = Get-Content .\\data.json | ConvertFrom-Json"
    ].join("\n");
}
