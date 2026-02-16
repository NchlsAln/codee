"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "using System.Runtime.InteropServices;",
        "",
        "var handle = NativeLibrary.Load(\"nativecrypto\");",
        "Console.WriteLine(handle != IntPtr.Zero);",
        "NativeLibrary.Free(handle);"
    ].join("\n");
}
