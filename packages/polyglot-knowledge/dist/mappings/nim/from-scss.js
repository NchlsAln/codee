"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToNimRules = void 0;
exports.scssToNim = scssToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "nim");
function scssToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "nim", code);
}
exports.scssToNimRules = rules;
