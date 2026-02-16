"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToSedRules = void 0;
exports.scssToSed = scssToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "sed");
function scssToSed(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "sed", code);
}
exports.scssToSedRules = rules;
