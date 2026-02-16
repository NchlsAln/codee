"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToSedRules = void 0;
exports.yamlToSed = yamlToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "sed");
function yamlToSed(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "sed", code);
}
exports.yamlToSedRules = rules;
