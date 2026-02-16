"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToPythonRules = void 0;
exports.nimToPython = nimToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "python");
function nimToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "python", code);
}
exports.nimToPythonRules = rules;
