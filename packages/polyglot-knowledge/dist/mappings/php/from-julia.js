"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToPhpRules = void 0;
exports.juliaToPhp = juliaToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "php");
function juliaToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "php", code);
}
exports.juliaToPhpRules = rules;
