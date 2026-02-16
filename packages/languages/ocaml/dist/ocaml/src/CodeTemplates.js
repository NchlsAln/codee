"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const ctypes_1 = require("./templates/systems/ctypes");
const dream_1 = require("./templates/functional/dream");
const caqti_1 = require("./templates/functional/caqti");
const alcotest_1 = require("./templates/functional/alcotest");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("ocaml", {
            idioms: ["Prefer pure functions where possible.", "Use pattern matching.", "Structure code with modules."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "systems.ctypes": (0, ctypes_1.ctypesTemplate)(),
                "functional.dream": (0, dream_1.dreamTemplate)(),
                "functional.caqti": (0, caqti_1.caqtiTemplate)(),
                "functional.alcotest": (0, alcotest_1.alcotestTemplate)(),
                "concurrency.lwt": (0, async_1.asyncTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
