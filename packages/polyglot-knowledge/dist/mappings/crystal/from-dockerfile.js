"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToCrystalRules = void 0;
exports.dockerfileToCrystal = dockerfileToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "crystal");
function dockerfileToCrystal(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "crystal", code);
}
exports.dockerfileToCrystalRules = rules;
