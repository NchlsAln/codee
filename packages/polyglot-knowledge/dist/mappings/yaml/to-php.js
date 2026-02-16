"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToPhpRules = void 0;
exports.yamlToPhp = yamlToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "php");
function yamlToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "php", code);
}
exports.yamlToPhpRules = rules;
