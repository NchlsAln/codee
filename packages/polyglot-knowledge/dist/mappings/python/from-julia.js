"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToPythonRules = void 0;
exports.juliaToPython = juliaToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "python");
function juliaToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "python", code);
}
exports.juliaToPythonRules = rules;
