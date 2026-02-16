"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "const std = @import(\"std\");",
        "fn worker() void {",
        "  std.time.sleep(10 * std.time.ns_per_ms);",
        "}",
        "pub fn main() !void {",
        "  var thread = try std.Thread.spawn(.{}, worker, .{});",
        "  thread.join();",
        "}"
    ].join("\n");
}
