"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToDartRules = void 0;
exports.sasToDart = sasToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "dart");
function sasToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "dart", code);
}
exports.sasToDartRules = rules;
