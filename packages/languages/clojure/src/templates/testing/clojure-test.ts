export function clojureTestTemplate(): string {
  return [
    "(ns app.core-test",
    "  (:require [clojure.test :refer [deftest is testing]]))",
    "",
    "(deftest math-test",
    "  (testing \"addition\"",
    "    (is (= 4 (+ 2 2)))))"
  ].join("\n");
}
