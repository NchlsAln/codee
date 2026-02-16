export function webTemplate(): string {
  return [
    "const std = @import(\"std\");",
    "fn logRequest(req: *std.http.Server.Request) void {",
    "  std.debug.print(\"{s}\\n\", .{req.head.target});",
    "}",
    "pub fn main() !void {",
    "  var server = std.http.Server.init(std.heap.page_allocator, .{});",
    "  defer server.deinit();",
    "  try server.listen(.{ .port = 8080 });",
    "  while (true) {",
    "    var res = try server.accept(.{});",
    "    defer res.deinit();",
    "    logRequest(&res.request);",
    "    if (std.mem.eql(u8, res.request.head.target, \"/health\")) {",
    "      try res.respond(\"ok\", .{});",
    "    } else {",
    "      try res.respond(\"not found\", .{ .status = .not_found });",
    "    }",
    "  }",
    "}"
  ].join("\n");
}
