export function ffiWasmTemplate(): string {
  return [
    "{:ok, instance} = Wasmex.start_link('math.wasm')",
    "IO.inspect(instance)"
  ].join("\n");
}
