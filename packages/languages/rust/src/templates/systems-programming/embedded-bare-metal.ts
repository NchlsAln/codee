export function embeddedBareMetalTemplate(): string {
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
