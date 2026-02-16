"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToJuliaRules = void 0;
exports.cssToJulia = cssToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "julia");
function cssToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "julia", code);
}
exports.cssToJuliaRules = rules;
