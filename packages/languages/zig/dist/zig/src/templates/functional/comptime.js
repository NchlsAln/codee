"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comptimeTemplate = comptimeTemplate;
function comptimeTemplate() {
    return [
        "fn add(comptime T: type, a: T, b: T) T {",
        "  return a + b;",
        "}",
        "pub fn main() void {",
        "  const sum = add(u32, 2, 3);",
        "  _ = sum;",
        "}"
    ].join("\n");
}
