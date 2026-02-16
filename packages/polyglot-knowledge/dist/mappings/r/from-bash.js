"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToRRules = void 0;
exports.bashToR = bashToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "r");
function bashToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "r", code);
}
exports.bashToRRules = rules;
