"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToJuliaRules = void 0;
exports.bashToJulia = bashToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "julia");
function bashToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "julia", code);
}
exports.bashToJuliaRules = rules;
