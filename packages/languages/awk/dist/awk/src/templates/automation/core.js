"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.automationTemplate = automationTemplate;
function automationTemplate() {
    return [
        "awk '$3 > 100 { print $1 }' data.csv",
        "awk 'NR==1 { next } { sum += $2 } END { print sum }' data.csv"
    ].join("\n");
}
