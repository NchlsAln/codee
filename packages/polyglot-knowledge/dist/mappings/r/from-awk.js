"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToRRules = void 0;
exports.awkToR = awkToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "r");
function awkToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "r", code);
}
exports.awkToRRules = rules;
