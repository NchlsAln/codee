"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return "package main\n\nimport (\n  \"plugin\"\n)\n\nfunc main() {\n  p, _ := plugin.Open(\"./plugin.so\")\n  _, _ = p.Lookup(\"Add\")\n}\n";
}
