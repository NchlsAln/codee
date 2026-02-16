"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToDartRules = void 0;
exports.scssToDart = scssToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "dart");
function scssToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "dart", code);
}
exports.scssToDartRules = rules;
