"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliTemplate = cliTemplate;
function cliTemplate() {
    return [
        "const std = @import(\"std\");",
        "pub fn main() !void {",
        "  var args = std.process.args();",
        "  _ = args.next();",
        "  const input = args.next() orelse \"default\";",
        "  const cfg = std.os.getenv(\"APP_ENV\") orelse \"dev\";",
        "  std.log.info(\"{s} {s}\", .{ input, cfg });",
        "}"
    ].join("\n");
}
