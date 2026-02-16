export function ffiTemplate(): string {
  return [
    "const std = @import(\"std\");",
    "const c = @cImport({ @cInclude(\"math.h\"); });",
    "pub fn main() !void {",
    "  const v = c.sqrt(9.0);",
    "  var lib = try std.DynamicLibrary.open(\"libm.so\");",
    "  defer lib.close();",
    "  _ = v;",
    "}"
  ].join("\n");
}
