"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToPhpRules = void 0;
exports.rToPhp = rToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "php");
function rToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "php", code);
}
exports.rToPhpRules = rules;
