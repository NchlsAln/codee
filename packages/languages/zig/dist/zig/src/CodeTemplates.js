"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const http_server_1 = require("./templates/systems/http-server");
const wasm_1 = require("./templates/systems/wasm");
const embedded_1 = require("./templates/systems/embedded");
const comptime_1 = require("./templates/functional/comptime");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("zig", {
            idioms: ["Prefer explicit control over implicit behavior.", "Pass allocators explicitly.", "Use comptime for metaprogramming."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "systems.http-server": (0, http_server_1.httpServerTemplate)(),
                "systems.wasm": (0, wasm_1.wasmTemplate)(),
                "systems.embedded": (0, embedded_1.embeddedTemplate)(),
                "functional.comptime": (0, comptime_1.comptimeTemplate)(),
                "concurrency.threads": (0, async_1.asyncTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
