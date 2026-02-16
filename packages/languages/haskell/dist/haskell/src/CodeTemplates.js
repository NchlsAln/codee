"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const ffi_1 = require("./templates/systems/ffi");
const servant_1 = require("./templates/functional/servant");
const persistent_1 = require("./templates/functional/persistent");
const conduit_1 = require("./templates/functional/conduit");
const hspec_1 = require("./templates/functional/hspec");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("haskell", {
            idioms: ["Prefer pure functions.", "Use type signatures.", "Lean on type classes."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "systems.ffi": (0, ffi_1.ffiTemplate)(),
                "functional.servant": (0, servant_1.servantTemplate)(),
                "functional.persistent": (0, persistent_1.persistentTemplate)(),
                "functional.conduit": (0, conduit_1.conduitTemplate)(),
                "functional.hspec": (0, hspec_1.hspecTemplate)(),
                "concurrency.stm": (0, async_1.asyncTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
