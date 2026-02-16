"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToPhpRules = void 0;
exports.sedToPhp = sedToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "php");
function sedToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "php", code);
}
exports.sedToPhpRules = rules;
