"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataManipulationTemplate = dataManipulationTemplate;
function dataManipulationTemplate() {
    return [
        "SELECT group_id, AVG(score) AS avg_score",
        "FROM scores",
        "WHERE score > 80",
        "GROUP BY group_id;"
    ].join("\n");
}
