"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToPhpRules = void 0;
exports.awkToPhp = awkToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "php");
function awkToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "php", code);
}
exports.awkToPhpRules = rules;
