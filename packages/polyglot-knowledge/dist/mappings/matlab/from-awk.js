"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToMatlabRules = void 0;
exports.awkToMatlab = awkToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "matlab");
function awkToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "matlab", code);
}
exports.awkToMatlabRules = rules;
