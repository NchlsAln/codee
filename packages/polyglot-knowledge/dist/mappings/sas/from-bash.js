"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToSasRules = void 0;
exports.bashToSas = bashToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "sas");
function bashToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "sas", code);
}
exports.bashToSasRules = rules;
