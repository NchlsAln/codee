"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToPythonRules = void 0;
exports.rToPython = rToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "python");
function rToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "python", code);
}
exports.rToPythonRules = rules;
