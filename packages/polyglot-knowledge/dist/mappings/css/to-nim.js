"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToNimRules = void 0;
exports.cssToNim = cssToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "nim");
function cssToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "nim", code);
}
exports.cssToNimRules = rules;
