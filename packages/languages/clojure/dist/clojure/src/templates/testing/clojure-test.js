"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureTestTemplate = clojureTestTemplate;
function clojureTestTemplate() {
    return [
        "(ns app.core-test",
        "  (:require [clojure.test :refer [deftest is testing]]))",
        "",
        "(deftest math-test",
        "  (testing \"addition\"",
        "    (is (= 4 (+ 2 2)))))"
    ].join("\n");
}
