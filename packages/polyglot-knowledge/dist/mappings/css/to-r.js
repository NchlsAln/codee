"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToRRules = void 0;
exports.cssToR = cssToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "r");
function cssToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "r", code);
}
exports.cssToRRules = rules;
