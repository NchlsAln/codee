"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToDartRules = void 0;
exports.cssToDart = cssToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "dart");
function cssToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "dart", code);
}
exports.cssToDartRules = rules;
