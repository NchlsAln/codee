"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToSasRules = void 0;
exports.yamlToSas = yamlToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "sas");
function yamlToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "sas", code);
}
exports.yamlToSasRules = rules;
