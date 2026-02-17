"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wasmBindgenTemplate = wasmBindgenTemplate;
function wasmBindgenTemplate() {
  return [
    "use wasm_bindgen::prelude::*;",
    "",
    "#[wasm_bindgen]",
    "pub fn greet(name: &str) -> String {",
    '    format!("Hello, {}", name)',
    "}",
  ].join("\n");
}
