"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToPythonRules = void 0;
exports.rustToPython = rustToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "python");
function rustToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "python", code);
}
exports.rustToPythonRules = rules;
