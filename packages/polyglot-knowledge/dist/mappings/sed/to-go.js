"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToGoRules = void 0;
exports.sedToGo = sedToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "go");
function sedToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "go", code);
}
exports.sedToGoRules = rules;
