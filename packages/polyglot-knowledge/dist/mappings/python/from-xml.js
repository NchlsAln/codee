"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToPythonRules = void 0;
exports.xmlToPython = xmlToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "python");
function xmlToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "python", code);
}
exports.xmlToPythonRules = rules;
