"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToMatlabRules = void 0;
exports.bashToMatlab = bashToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "matlab");
function bashToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "matlab", code);
}
exports.bashToMatlabRules = rules;
