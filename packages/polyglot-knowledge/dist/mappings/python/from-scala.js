"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToPythonRules = void 0;
exports.scalaToPython = scalaToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "python");
function scalaToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "python", code);
}
exports.scalaToPythonRules = rules;
