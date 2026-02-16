"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializationTemplate = serializationTemplate;
function serializationTemplate() {
    return [
        "const std = @import(\"std\");",
        "const msgpack = @import(\"msgpack\");",
        "pub fn main() !void {",
        "  const payload = std.json.stringifyAlloc(std.heap.page_allocator, .{ .ok = true }, .{}) catch return;",
        "  defer std.heap.page_allocator.free(payload);",
        "  var buf: [8]u8 = undefined;",
        "  std.mem.writeInt(u64, &buf, 42, .little);",
        "  _ = msgpack;",
        "}"
    ].join("\n");
}
