"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToPythonRules = void 0;
exports.htmlToPython = htmlToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "python");
function htmlToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "python", code);
}
exports.htmlToPythonRules = rules;
