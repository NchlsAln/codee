"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToPythonRules = void 0;
exports.crystalToPython = crystalToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "python");
function crystalToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "python", code);
}
exports.crystalToPythonRules = rules;
