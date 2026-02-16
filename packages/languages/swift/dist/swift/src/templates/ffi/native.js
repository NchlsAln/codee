"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "import Darwin",
        "",
        "let handle = dlopen(\"/usr/lib/libc.dylib\", RTLD_NOW)",
        "print(handle != nil)",
        "if let h = handle { dlclose(h) }"
    ].join("\n");
}
