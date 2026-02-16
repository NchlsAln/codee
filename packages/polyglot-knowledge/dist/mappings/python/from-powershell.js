"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToPythonRules = void 0;
exports.powershellToPython = powershellToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "python");
function powershellToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "python", code);
}
exports.powershellToPythonRules = rules;
