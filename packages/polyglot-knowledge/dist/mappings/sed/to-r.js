"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToRRules = void 0;
exports.sedToR = sedToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "r");
function sedToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "r", code);
}
exports.sedToRRules = rules;
