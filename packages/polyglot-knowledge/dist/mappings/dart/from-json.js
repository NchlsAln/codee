"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToDartRules = void 0;
exports.jsonToDart = jsonToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "dart");
function jsonToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "dart", code);
}
exports.jsonToDartRules = rules;
