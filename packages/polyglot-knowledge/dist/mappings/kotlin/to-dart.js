"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToDartRules = void 0;
exports.kotlinToDart = kotlinToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "dart");
function kotlinToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "dart", code);
}
exports.kotlinToDartRules = rules;
