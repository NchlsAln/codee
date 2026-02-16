"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToPythonRules = void 0;
exports.csharpToPython = csharpToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "python");
function csharpToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "python", code);
}
exports.csharpToPythonRules = rules;
