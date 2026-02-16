"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToPythonRules = void 0;
exports.goToPython = goToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "python");
function goToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "python", code);
}
exports.goToPythonRules = rules;
