"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceDriversTemplate = deviceDriversTemplate;
function deviceDriversTemplate() {
  return [
    "use core::ptr::read_volatile;",
    "use core::ptr::write_volatile;",
    "",
    "const REG: *mut u32 = 0x1000_0000 as *mut u32;",
    "",
    "pub fn read_reg() -> u32 {",
    "    unsafe { read_volatile(REG) }",
    "}",
    "",
    "pub fn write_reg(val: u32) {",
    "    unsafe { write_volatile(REG, val) }",
    "}",
  ].join("\n");
}
