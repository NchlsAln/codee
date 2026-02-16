"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToDartRules = void 0;
exports.crystalToDart = crystalToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "dart");
function crystalToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "dart", code);
}
exports.crystalToDartRules = rules;
