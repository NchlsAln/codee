"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToSasRules = void 0;
exports.scssToSas = scssToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "sas");
function scssToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "sas", code);
}
exports.scssToSasRules = rules;
