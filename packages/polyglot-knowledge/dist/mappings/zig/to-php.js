"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToPhpRules = void 0;
exports.zigToPhp = zigToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "php");
function zigToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "php", code);
}
exports.zigToPhpRules = rules;
