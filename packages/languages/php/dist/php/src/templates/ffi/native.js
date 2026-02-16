"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "<?php",
        "if (extension_loaded('pdo_mysql')) {",
        "  echo 'pdo_mysql available';",
        "}",
        ""
    ].join("\n");
}
