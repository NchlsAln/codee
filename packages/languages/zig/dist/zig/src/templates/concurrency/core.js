"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concurrencyTemplate = concurrencyTemplate;
function concurrencyTemplate() {
    return [
        "const std = @import(\"std\");",
        "fn work() void { std.time.sleep(10 * std.time.ns_per_ms); }",
        "pub fn main() !void {",
        "  var thread = try std.Thread.spawn(.{}, work, .{});",
        "  thread.join();",
        "  var chan = std.Channel(i32).init(std.heap.page_allocator);",
        "  defer chan.deinit();",
        "  try chan.send(1);",
        "  _ = try chan.recv();",
        "  var value = std.atomic.Value(i32).init(0);",
        "  _ = value.compareExchangeStrong(0, 1, .seq_cst, .seq_cst);",
        "}"
    ].join("\n");
}
