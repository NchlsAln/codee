"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
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
