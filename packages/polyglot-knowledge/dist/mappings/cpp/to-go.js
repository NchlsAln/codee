"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToGoRules = void 0;
exports.cppToGo = cppToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "go");
function cppToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "go", code);
}
exports.cppToGoRules = rules;
