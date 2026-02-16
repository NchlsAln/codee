"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToPythonRules = void 0;
exports.cppToPython = cppToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "python");
function cppToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "python", code);
}
exports.cppToPythonRules = rules;
