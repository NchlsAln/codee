"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToMatlabRules = void 0;
exports.cssToMatlab = cssToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "matlab");
function cssToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "matlab", code);
}
exports.cssToMatlabRules = rules;
