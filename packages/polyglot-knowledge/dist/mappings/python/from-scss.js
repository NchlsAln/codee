"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToPythonRules = void 0;
exports.scssToPython = scssToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "python");
function scssToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "python", code);
}
exports.scssToPythonRules = rules;
