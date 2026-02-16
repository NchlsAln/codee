"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToNimRules = void 0;
exports.bashToNim = bashToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "nim");
function bashToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "nim", code);
}
exports.bashToNimRules = rules;
