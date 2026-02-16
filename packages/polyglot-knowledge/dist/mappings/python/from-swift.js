"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToPythonRules = void 0;
exports.swiftToPython = swiftToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "python");
function swiftToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "python", code);
}
exports.swiftToPythonRules = rules;
