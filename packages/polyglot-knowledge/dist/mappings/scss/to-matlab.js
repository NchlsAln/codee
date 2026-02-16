"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToMatlabRules = void 0;
exports.scssToMatlab = scssToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "matlab");
function scssToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "matlab", code);
}
exports.scssToMatlabRules = rules;
