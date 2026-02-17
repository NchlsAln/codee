"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wasmPackWorkflowTemplate = wasmPackWorkflowTemplate;
function wasmPackWorkflowTemplate() {
  return [
    "// wasm-pack build --target bundler",
    "// wasm-pack publish",
    "// import package from npm and call wasm functions",
  ].join("\n");
}
