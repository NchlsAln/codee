"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToNimRules = void 0;
exports.rToNim = rToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "nim");
function rToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "nim", code);
}
exports.rToNimRules = rules;
