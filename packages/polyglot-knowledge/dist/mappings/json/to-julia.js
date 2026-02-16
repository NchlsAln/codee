"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToJuliaRules = void 0;
exports.jsonToJulia = jsonToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "julia");
function jsonToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "julia", code);
}
exports.jsonToJuliaRules = rules;
