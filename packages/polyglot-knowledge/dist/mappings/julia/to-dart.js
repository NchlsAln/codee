"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToDartRules = void 0;
exports.juliaToDart = juliaToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "dart");
function juliaToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "dart", code);
}
exports.juliaToDartRules = rules;
