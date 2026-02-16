"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "object NativeCrypto {",
        "  System.loadLibrary(\"nativecrypto\")",
        "  @native def hash(input: String): Array[Byte]",
        "}",
        "",
        "val bytes = NativeCrypto.hash(\"data\")",
        "println(bytes.length)"
    ].join("\n");
}
