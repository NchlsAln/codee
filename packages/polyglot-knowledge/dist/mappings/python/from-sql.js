"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToPythonRules = void 0;
exports.sqlToPython = sqlToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "python");
function sqlToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "python", code);
}
exports.sqlToPythonRules = rules;
