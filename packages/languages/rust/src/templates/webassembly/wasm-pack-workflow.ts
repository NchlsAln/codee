export function wasmPackWorkflowTemplate(): string {
  return [
    "// wasm-pack build --target bundler",
    "// wasm-pack publish",
    "// import package from npm and call wasm functions",
  ].join("\n");
}
