"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingTemplate = testingTemplate;
function testingTemplate() {
    return [
        "const std = @import(\"std\");",
        "test \"add\" {",
        "  try std.testing.expectEqual(@as(i32, 3), 1 + 2);",
        "}",
        "pub fn main() void {",
        "  var timer = std.time.Timer.start() catch return;",
        "  var total: usize = 0;",
        "  var i: usize = 0;",
        "  while (i < 1000) : (i += 1) total += i;",
        "  _ = timer.read();",
        "  _ = total;",
        "}"
    ].join("\n");
}
