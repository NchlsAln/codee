"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToJuliaRules = void 0;
exports.awkToJulia = awkToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "julia");
function awkToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "julia", code);
}
exports.awkToJuliaRules = rules;
