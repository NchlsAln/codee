"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToPythonRules = void 0;
exports.dartToPython = dartToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "python");
function dartToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "python", code);
}
exports.dartToPythonRules = rules;
