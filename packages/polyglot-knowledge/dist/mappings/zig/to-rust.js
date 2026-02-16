"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToRustRules = void 0;
exports.zigToRust = zigToRust;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "memory.manual",
        from: "zig",
        to: "rust",
        steps: ["Translate explicit allocator usage to ownership and borrowing", "Map defer/errdefer to Drop and scope guards"]
    },
    {
        conceptId: "metaprogramming.compile-time",
        from: "zig",
        to: "rust",
        steps: ["Translate comptime to const eval and macros", "Use build.rs for code generation"]
    },
    {
        conceptId: "concurrency.channels",
        from: "zig",
        to: "rust",
        steps: ["Translate threads to std::thread or tokio", "Use mpsc channels for messaging"]
    },
    {
        conceptId: "systems.ffi",
        from: "zig",
        to: "rust",
        steps: ["Translate @cImport to bindgen or extern blocks", "Map Zig structs to #[repr(C)] structs"]
    }
];
function zigToRust(code) {
    return (0, translation_engine_1.translateWithEngine)("zig", "rust", code);
}
exports.zigToRustRules = rules;
