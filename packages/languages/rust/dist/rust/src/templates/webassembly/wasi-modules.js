"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wasiModulesTemplate = wasiModulesTemplate;
function wasiModulesTemplate() {
  return ["// WASI module example", "fn main() {", '    println!("Hello from WASI");', "}"].join(
    "\n",
  );
}
