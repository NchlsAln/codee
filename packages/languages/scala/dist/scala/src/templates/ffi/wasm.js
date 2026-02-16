"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "import scala.scalajs.js",
        "import scala.scalajs.js.annotation._",
        "",
        "@js.native",
        "@JSImport(\"./math.wasm\", JSImport.Default)",
        "object WasmModule extends js.Object {",
        "  def add(a: Int, b: Int): Int = js.native",
        "}",
        "",
        "println(WasmModule.add(1, 2))"
    ].join("\n");
}
