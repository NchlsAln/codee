"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataManipulationTemplate = dataManipulationTemplate;
function dataManipulationTemplate() {
    return [
        "tbl = table(group, score)",
        "summary = groupsummary(tbl, 'group', 'mean', 'score');",
        "disp(summary)"
    ].join("\n");
}
