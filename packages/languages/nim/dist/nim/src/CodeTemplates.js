"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const chronos_1 = require("./templates/concurrency/chronos");
const c_interop_1 = require("./templates/systems/c-interop");
const allocator_1 = require("./templates/systems/allocator");
const jester_1 = require("./templates/functional/jester");
const karax_1 = require("./templates/functional/karax");
const norm_1 = require("./templates/functional/norm");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("nim", {
            idioms: ["Prefer explicit types for public APIs.", "Use templates/macros for reuse.", "Lean on the effect system."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "systems.c-interop": (0, c_interop_1.cInteropTemplate)(),
                "systems.allocator": (0, allocator_1.allocatorTemplate)(),
                "functional.jester": (0, jester_1.jesterTemplate)(),
                "functional.karax": (0, karax_1.karaxTemplate)(),
                "functional.norm": (0, norm_1.normTemplate)(),
                "concurrency.async": (0, async_1.asyncTemplate)(),
                "concurrency.chronos": (0, chronos_1.chronosTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
