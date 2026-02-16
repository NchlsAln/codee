"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToAwkRules = void 0;
exports.cssToAwk = cssToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "awk");
function cssToAwk(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "awk", code);
}
exports.cssToAwkRules = rules;
