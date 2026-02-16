"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToNimRules = void 0;
exports.juliaToNim = juliaToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "nim");
function juliaToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "nim", code);
}
exports.juliaToNimRules = rules;
