"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToPhpRules = void 0;
exports.bashToPhp = bashToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "php");
function bashToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "php", code);
}
exports.bashToPhpRules = rules;
