"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToPythonRules = void 0;
exports.awkToPython = awkToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "python");
function awkToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "python", code);
}
exports.awkToPythonRules = rules;
