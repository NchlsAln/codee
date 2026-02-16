"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToJuliaRules = void 0;
exports.scssToJulia = scssToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "julia");
function scssToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "julia", code);
}
exports.scssToJuliaRules = rules;
