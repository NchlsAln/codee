"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToBashRules = void 0;
exports.scssToBash = scssToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "bash");
function scssToBash(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "bash", code);
}
exports.scssToBashRules = rules;
