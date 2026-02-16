"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToBashRules = void 0;
exports.cssToBash = cssToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "bash");
function cssToBash(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "bash", code);
}
exports.cssToBashRules = rules;
