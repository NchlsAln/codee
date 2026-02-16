"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToRRules = void 0;
exports.yamlToR = yamlToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "r");
function yamlToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "r", code);
}
exports.yamlToRRules = rules;
