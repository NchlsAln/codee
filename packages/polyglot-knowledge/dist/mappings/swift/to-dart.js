"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToDartRules = void 0;
exports.swiftToDart = swiftToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "dart");
function swiftToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "dart", code);
}
exports.swiftToDartRules = rules;
