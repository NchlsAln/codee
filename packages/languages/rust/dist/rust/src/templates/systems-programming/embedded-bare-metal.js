"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embeddedBareMetalTemplate = embeddedBareMetalTemplate;
function embeddedBareMetalTemplate() {
  return [
    "#![no_std]",
    "#![no_main]",
    "",
    "use cortex_m_rt::entry;",
    "",
    "#[entry]",
    "fn main() -> ! {",
    "    loop {",
    "        // toggle GPIO",
    "    }",
    "}",
  ].join("\n");
}
