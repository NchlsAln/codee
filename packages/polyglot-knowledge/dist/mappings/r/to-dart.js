"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToDartRules = void 0;
exports.rToDart = rToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "dart");
function rToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "dart", code);
}
exports.rToDartRules = rules;
