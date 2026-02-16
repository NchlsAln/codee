"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "const addon = require('./build/Release/addon.node');",
        "",
        "console.log(addon.add(2, 3));"
    ].join("\n");
}
