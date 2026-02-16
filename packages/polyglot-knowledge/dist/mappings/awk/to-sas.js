"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToSasRules = void 0;
exports.awkToSas = awkToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "sas");
function awkToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "sas", code);
}
exports.awkToSasRules = rules;
