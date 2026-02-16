"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stdlibTemplate = stdlibTemplate;
function stdlibTemplate() {
    return [
        "const std = @import(\"std\");",
        "pub fn main() !void {",
        "  const arr = [_]i32{ 1, 2, 3 };",
        "  const slice = arr[0..];",
        "  const msg = try std.fmt.allocPrint(std.heap.page_allocator, \"hi {s}\", .{\"zig\"});",
        "  defer std.heap.page_allocator.free(msg);",
        "  var map = std.AutoHashMap([]const u8, i32).init(std.heap.page_allocator);",
        "  defer map.deinit();",
        "  try map.put(\"a\", 1);",
        "  try std.fs.cwd().writeFile(\"data.txt\", \"ok\\n\");",
        "  const data = try std.fs.cwd().readFileAlloc(std.heap.page_allocator, \"data.txt\", 64);",
        "  defer std.heap.page_allocator.free(data);",
        "  const root = std.math.sqrt(81.0);",
        "  _ = slice; _ = msg; _ = root;",
        "}"
    ].join("\n");
}
