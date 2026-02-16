"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToDartRules = void 0;
exports.cppToDart = cppToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "dart");
function cppToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "dart", code);
}
exports.cppToDartRules = rules;
