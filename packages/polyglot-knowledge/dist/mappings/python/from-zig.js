"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToPythonRules = void 0;
exports.zigToPython = zigToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "python");
function zigToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "python", code);
}
exports.zigToPythonRules = rules;
