"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToSedRules = void 0;
exports.cssToSed = cssToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "sed");
function cssToSed(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "sed", code);
}
exports.cssToSedRules = rules;
