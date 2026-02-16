"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToPhpRules = void 0;
exports.nimToPhp = nimToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "php");
function nimToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "php", code);
}
exports.nimToPhpRules = rules;
