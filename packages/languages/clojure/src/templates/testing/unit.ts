export function unitTemplate(): string {
  return [
    "(ns sample-test",
    "  (:require [clojure.test :refer [deftest is]]))",
    "(deftest adds-test",
    "  (is (= 4 (+ 2 2))))"
  ].join("\n");
}
