"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToDartRules = void 0;
exports.goToDart = goToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "dart");
function goToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "dart", code);
}
exports.goToDartRules = rules;
