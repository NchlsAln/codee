"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToGoRules = void 0;
exports.juliaToGo = juliaToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "go");
function juliaToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "go", code);
}
exports.juliaToGoRules = rules;
