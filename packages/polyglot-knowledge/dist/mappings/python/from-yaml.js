"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToPythonRules = void 0;
exports.yamlToPython = yamlToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "python");
function yamlToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "python", code);
}
exports.yamlToPythonRules = rules;
