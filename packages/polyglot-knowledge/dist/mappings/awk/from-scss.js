"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToAwkRules = void 0;
exports.scssToAwk = scssToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "awk");
function scssToAwk(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "awk", code);
}
exports.scssToAwkRules = rules;
