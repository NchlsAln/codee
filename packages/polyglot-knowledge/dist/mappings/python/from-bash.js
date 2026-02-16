"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToPythonRules = void 0;
exports.bashToPython = bashToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "python");
function bashToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "python", code);
}
exports.bashToPythonRules = rules;
