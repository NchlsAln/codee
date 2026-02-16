"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToSasRules = void 0;
exports.cssToSas = cssToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "sas");
function cssToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "sas", code);
}
exports.cssToSasRules = rules;
