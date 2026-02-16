"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToPythonRules = void 0;
exports.cssToPython = cssToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "python");
function cssToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "python", code);
}
exports.cssToPythonRules = rules;
