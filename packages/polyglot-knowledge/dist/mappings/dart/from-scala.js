"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToDartRules = void 0;
exports.scalaToDart = scalaToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "dart");
function scalaToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "dart", code);
}
exports.scalaToDartRules = rules;
