"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "(import '(java.lang Math))",
        "(println (Math/abs -3))"
    ].join("\n");
}
