"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToGoRules = void 0;
exports.bashToGo = bashToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "go");
function bashToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "go", code);
}
exports.bashToGoRules = rules;
