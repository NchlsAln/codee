"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToMatlabRules = void 0;
exports.sedToMatlab = sedToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "matlab");
function sedToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "matlab", code);
}
exports.sedToMatlabRules = rules;
