"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "import kotlinx.cinterop.*",
        "",
        "fun main() {",
        "  val value = 42",
        "  memScoped {",
        "    val ptr = alloc<IntVar>()",
        "    ptr.value = value",
        "    println(ptr.value)",
        "  }",
        "}"
    ].join("\n");
}
