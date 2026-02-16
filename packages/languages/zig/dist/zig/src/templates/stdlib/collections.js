"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "const std = @import(\"std\");",
        "pub fn main() !void {",
        "  var gpa = std.heap.GeneralPurposeAllocator(.{}){};",
        "  defer _ = gpa.deinit();",
        "  const allocator = gpa.allocator();",
        "  var list = std.ArrayList(u8).init(allocator);",
        "  defer list.deinit();",
        "  try list.append(1);",
        "  try list.append(2);",
        "  var map = std.AutoHashMap(u8, u8).init(allocator);",
        "  defer map.deinit();",
        "  try map.put(1, 10);",
        "  _ = map.get(1);",
        "}"
    ].join("\n");
}
