"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToDartRules = void 0;
exports.javaToDart = javaToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "dart");
function javaToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "dart", code);
}
exports.javaToDartRules = rules;
