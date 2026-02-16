"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToPythonRules = void 0;
exports.sasToPython = sasToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "python");
function sasToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "python", code);
}
exports.sasToPythonRules = rules;
