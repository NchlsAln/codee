"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToPhpRules = void 0;
exports.scssToPhp = scssToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "php");
function scssToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "php", code);
}
exports.scssToPhpRules = rules;
