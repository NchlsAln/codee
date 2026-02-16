"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToNimRules = void 0;
exports.sedToNim = sedToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "nim");
function sedToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "nim", code);
}
exports.sedToNimRules = rules;
