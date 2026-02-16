"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToDartRules = void 0;
exports.awkToDart = awkToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "dart");
function awkToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "dart", code);
}
exports.awkToDartRules = rules;
