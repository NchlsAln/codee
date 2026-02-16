"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataExtractionTemplate = dataExtractionTemplate;
function dataExtractionTemplate() {
    return [
        "awk -F, 'NR>1 { print $1, $3 }' data.csv",
        "awk -F\"[=: ]+\" '/status/ { print $2 }' app.log"
    ].join("\n");
}
