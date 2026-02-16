"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToNimRules = void 0;
exports.awkToNim = awkToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "nim");
function awkToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "nim", code);
}
exports.awkToNimRules = rules;
