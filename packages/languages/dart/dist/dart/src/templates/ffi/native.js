"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "import 'dart:ffi';",
        "",
        "final lib = DynamicLibrary.open('nativecrypto');",
        "print(lib);"
    ].join("\n");
}
