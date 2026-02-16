"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embeddedTemplate = embeddedTemplate;
function embeddedTemplate() {
    return [
        "pub fn main() void {",
        "  const led = @ptrFromInt(*volatile u8, 0x40000000);",
        "  led.* = 1;",
        "  while (true) {}",
        "}"
    ].join("\n");
}
