"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToTypeScriptRules = void 0;
exports.zigToTypeScript = zigToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "memory.manual",
        from: "zig",
        to: "typescript",
        steps: ["Translate explicit allocators to managed objects", "Use ArrayBuffer for manual byte control"]
    },
    {
        conceptId: "metaprogramming.compile-time",
        from: "zig",
        to: "typescript",
        steps: ["Translate comptime to build-time code generation", "Use codegen scripts or TS transformers"]
    },
    {
        conceptId: "concurrency.channels",
        from: "zig",
        to: "typescript",
        steps: ["Translate threads to Worker threads", "Use Promises and async queues for coordination"]
    },
    {
        conceptId: "systems.ffi",
        from: "zig",
        to: "typescript",
        steps: ["Translate C interop to N-API or FFI bindings", "Use buffer views for struct layouts"]
    }
];
function zigToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("zig", "typescript", code);
}
exports.zigToTypeScriptRules = rules;
