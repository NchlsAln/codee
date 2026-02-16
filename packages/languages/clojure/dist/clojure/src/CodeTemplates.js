"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const ring_handler_1 = require("./templates/web-frameworks/ring-handler");
const compojure_routes_1 = require("./templates/web-frameworks/compojure-routes");
const clojure_test_1 = require("./templates/testing/clojure-test");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("clojure", {
            idioms: ["Favor immutability.", "Use threading macros for pipelines.", "Leverage protocols for polymorphism."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "concurrency.async": (0, async_1.asyncTemplate)()
            },
            frameworkTemplates: {
                "web.ring.handler": (0, ring_handler_1.ringHandlerTemplate)(),
                "web.compojure.routes": (0, compojure_routes_1.compojureRoutesTemplate)()
            },
            testTemplates: {
                "clojure.test": (0, clojure_test_1.clojureTestTemplate)()
            }
        });
    }
}
exports.CodeTemplates = CodeTemplates;
