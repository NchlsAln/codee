"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToPythonRules = void 0;
exports.rubyToPython = rubyToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "python");
function rubyToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "python", code);
}
exports.rubyToPythonRules = rules;
