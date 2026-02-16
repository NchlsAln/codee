"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToJuliaRules = void 0;
exports.sedToJulia = sedToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "julia");
function sedToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "julia", code);
}
exports.sedToJuliaRules = rules;
