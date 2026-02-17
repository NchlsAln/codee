export function kernelModulesTemplate(): string {
  return [
    "#![no_std]",
    "#![no_main]",
    "",
    "// Kernel module skeleton (pseudo)\n",
    "#[no_mangle]",
    'pub extern "C" fn init_module() -> i32 {',
    "    0",
    "}",
    "",
    "#[no_mangle]",
    'pub extern "C" fn cleanup_module() {',
    "}",
  ].join("\n");
}
