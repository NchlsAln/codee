"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpTemplate = httpTemplate;
function httpTemplate() {
    return [
        "const std = @import(\"std\");",
        "pub fn main() !void {",
        "  var client = std.http.Client{ .allocator = std.heap.page_allocator };",
        "  defer client.deinit();",
        "  var req = try client.open(.GET, .{ .host = \"example.com\", .path = \"/\" }, .{});",
        "  defer req.deinit();",
        "  try req.send(.{});",
        "  _ = try req.wait();",
        "}"
    ].join("\n");
}
