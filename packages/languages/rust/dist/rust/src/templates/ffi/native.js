"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "#[cxx::bridge]",
        "mod ffi {",
        "    extern \"Rust\" {",
        "        fn add(a: i32, b: i32) -> i32;",
        "    }",
        "}",
        "",
        "fn add(a: i32, b: i32) -> i32 {",
        "    a + b",
        "}"
    ].join("\n");
}
