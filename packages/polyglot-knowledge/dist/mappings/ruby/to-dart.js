"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToDartRules = void 0;
exports.rubyToDart = rubyToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "dart");
function rubyToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "dart", code);
}
exports.rubyToDartRules = rules;
