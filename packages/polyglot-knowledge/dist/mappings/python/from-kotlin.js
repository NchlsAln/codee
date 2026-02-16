"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToPythonRules = void 0;
exports.kotlinToPython = kotlinToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "python");
function kotlinToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "python", code);
}
exports.kotlinToPythonRules = rules;
