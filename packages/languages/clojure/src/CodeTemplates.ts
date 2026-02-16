import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { ringHandlerTemplate } from "./templates/web-frameworks/ring-handler";
import { compojureRoutesTemplate } from "./templates/web-frameworks/compojure-routes";
import { clojureTestTemplate } from "./templates/testing/clojure-test";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("clojure", {
      idioms: ["Favor immutability.", "Use threading macros for pipelines.", "Leverage protocols for polymorphism."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "concurrency.async": asyncTemplate()
      },
      frameworkTemplates: {
        "web.ring.handler": ringHandlerTemplate(),
        "web.compojure.routes": compojureRoutesTemplate()
      },
      testTemplates: {
        "clojure.test": clojureTestTemplate()
      }
    });
  }
}

