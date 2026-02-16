"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToPythonRules = void 0;
exports.jsonToPython = jsonToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "python");
function jsonToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "python", code);
}
exports.jsonToPythonRules = rules;
