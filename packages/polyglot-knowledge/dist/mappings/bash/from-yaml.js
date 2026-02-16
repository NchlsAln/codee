"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToBashRules = void 0;
exports.yamlToBash = yamlToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "bash");
function yamlToBash(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "bash", code);
}
exports.yamlToBashRules = rules;
