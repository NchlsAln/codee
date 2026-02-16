"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToPhpRules = void 0;
exports.cssToPhp = cssToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "php");
function cssToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "php", code);
}
exports.cssToPhpRules = rules;
