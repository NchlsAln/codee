"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferTypeScriptTypes = inferTypeScriptTypes;
function inferTypeScriptTypes(source) {
  const hints = new Set();
  if (source.includes(": ")) {
    hints.add("explicit-types");
  }
  if (source.includes("as const")) {
    hints.add("literal-narrowing");
  }
  if (source.includes("strictNullChecks") || source.includes("noImplicitAny")) {
    hints.add("strict-mode");
  }
  if (source.includes("strictFunctionTypes") || source.includes("strict")) {
    hints.add("strict-function-types");
  }
  if (source.includes("|")) {
    hints.add("union-types");
  }
  if (source.includes("&")) {
    hints.add("intersection-types");
  }
  if (source.includes("extends") && source.includes("?")) {
    hints.add("conditional-types");
  }
  if (source.includes("infer ") || source.includes("keyof")) {
    hints.add("generic-constraints");
  }
  if (source.includes("never")) {
    hints.add("exhaustive-checks");
  }
  if (source.includes("Record<") || source.includes("keyof")) {
    hints.add("mapped-types");
  }
  if (source.includes("Paths") || source.includes("Leaves") || source.includes("DeepPartial")) {
    hints.add("utility-types");
  }
  if (source.includes("unknown")) {
    hints.add("unknown-type");
  }
  if (source.includes("any")) {
    hints.add("any-type");
  }
  if (source.includes("readonly")) {
    hints.add("readonly-types");
  }
  if (source.includes("infer ")) {
    hints.add("infer-keyword");
  }
  if (source.includes("satisfies")) {
    hints.add("satisfies-operator");
  }
  if (source.includes("baseUrl") || source.includes("paths")) {
    hints.add("module-resolution");
  }
  if (hints.size === 0) {
    hints.add("inferred-types");
  }
  return Array.from(hints);
}
