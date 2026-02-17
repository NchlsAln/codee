"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferRustTypes = inferRustTypes;
function inferRustTypes(source) {
  const hints = new Set();
  if (source.includes(": ")) {
    hints.add("explicit-types");
  }
  if (source.includes("impl Trait") || source.includes("dyn ")) {
    hints.add("trait-objects");
  }
  if (source.includes("<")) {
    hints.add("generics");
  }
  if (source.includes("'")) {
    hints.add("lifetimes");
  }
  if (source.includes("for<")) {
    hints.add("higher-ranked-lifetimes");
  }
  if (source.includes("::")) {
    hints.add("turbofish");
  }
  if (source.includes("where")) {
    hints.add("where-clauses");
  }
  if (source.includes("const ") && source.includes("<")) {
    hints.add("const-generics");
  }
  if (source.includes("Box<") || source.includes("Arc<")) {
    hints.add("heap-ownership");
  }
  if (source.includes("Option<") || source.includes("Result<")) {
    hints.add("sum-types");
  }
  if (source.includes("type ") && source.includes("struct")) {
    hints.add("newtypes");
  }
  if (source.includes("trait ") && source.includes("impl")) {
    hints.add("trait-resolution");
  }
  if (hints.size === 0) {
    hints.add("inferred-types");
  }
  return Array.from(hints);
}
