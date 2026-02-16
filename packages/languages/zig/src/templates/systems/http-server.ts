export function httpServerTemplate(): string {
  return [
    "const std = @import(\"std\");",
    "pub fn main() !void {",
    "  var gpa = std.heap.GeneralPurposeAllocator(.{}){};",
    "  defer _ = gpa.deinit();",
    "  const allocator = gpa.allocator();",
    "  var server = std.http.Server.init(allocator, .{});",
    "  defer server.deinit();",
    "  try server.listen(.{ .port = 8080 });",
    "  while (true) {",
    "    var res = try server.accept(.{});",
    "    defer res.deinit();",
    "    try res.respond(\"ok\", .{});",
    "  }",
    "}"
  ].join("\n");
}
