"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToDartRules = void 0;
exports.phpToDart = phpToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "dart");
function phpToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "dart", code);
}
exports.phpToDartRules = rules;
