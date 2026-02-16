"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToPythonRules = void 0;
exports.matlabToPython = matlabToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "python");
function matlabToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "python", code);
}
exports.matlabToPythonRules = rules;
