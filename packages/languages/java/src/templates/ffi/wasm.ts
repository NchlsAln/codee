export function ffiWasmTemplate(): string {
  return "public class WasmSample {\n  public static void main(String[] args) {\n    System.out.println(\"Use GraalVM WASM to run .wasm modules\");\n  }\n}\n";
}
