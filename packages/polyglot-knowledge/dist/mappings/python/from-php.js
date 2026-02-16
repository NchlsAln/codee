"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToPythonRules = void 0;
exports.phpToPython = phpToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "python");
function phpToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "python", code);
}
exports.phpToPythonRules = rules;
