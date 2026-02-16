"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const c_interop_1 = require("./templates/systems/c-interop");
const slice_1 = require("./templates/systems/slice");
const kemal_1 = require("./templates/functional/kemal");
const amber_1 = require("./templates/functional/amber");
const lucky_1 = require("./templates/functional/lucky");
const granite_1 = require("./templates/functional/granite");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("crystal", {
            idioms: ["Prefer explicit types where useful.", "Use blocks for iteration.", "Leverage macros for codegen."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "systems.c-interop": (0, c_interop_1.cInteropTemplate)(),
                "systems.slice": (0, slice_1.sliceTemplate)(),
                "functional.kemal": (0, kemal_1.kemalTemplate)(),
                "functional.amber": (0, amber_1.amberTemplate)(),
                "functional.lucky": (0, lucky_1.luckyTemplate)(),
                "functional.granite": (0, granite_1.graniteTemplate)(),
                "concurrency.fibers": (0, async_1.asyncTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
