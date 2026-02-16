"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToPythonRules = void 0;
exports.javaToPython = javaToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "python");
function javaToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "python", code);
}
exports.javaToPythonRules = rules;
