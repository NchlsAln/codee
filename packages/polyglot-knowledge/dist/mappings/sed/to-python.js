"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToPythonRules = void 0;
exports.sedToPython = sedToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "python");
function sedToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "python", code);
}
exports.sedToPythonRules = rules;
