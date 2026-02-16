"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToPythonRules = void 0;
exports.typescriptToPython = typescriptToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "python");
function typescriptToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "python", code);
}
exports.typescriptToPythonRules = rules;
