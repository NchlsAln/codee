"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToMatlabRules = void 0;
exports.yamlToMatlab = yamlToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "matlab");
function yamlToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "matlab", code);
}
exports.yamlToMatlabRules = rules;
