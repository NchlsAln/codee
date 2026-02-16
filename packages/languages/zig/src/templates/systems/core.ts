export function systemsTemplate(): string {
  return [
    "const std = @import(\"std\");",
    "const c = @cImport({ @cInclude(\"string.h\"); });",
    "pub fn main() !void {",
    "  var gpa = std.heap.GeneralPurposeAllocator(.{}){};",
    "  defer _ = gpa.deinit();",
    "  const allocator = gpa.allocator();",
    "  const buf = try allocator.alloc(u8, 16);",
    "  defer allocator.free(buf);",
    "  const len = c.strlen(\"hi\");",
    "  const home = std.os.getenv(\"HOME\") orelse \"\";",
    "  _ = len; _ = home;",
    "}"
  ].join("\n");
}
