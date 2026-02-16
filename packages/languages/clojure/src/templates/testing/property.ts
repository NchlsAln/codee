export function propertyTemplate(): string {
  return [
    "(ns prop-test",
    "  (:require [clojure.test.check :as tc]\n            [clojure.test.check.generators :as gen]\n            [clojure.test.check.properties :as prop]))",
    "(def prop-reverse",
    "  (prop/for-all [s gen/string]",
    "    (= s (clojure.string/reverse (clojure.string/reverse s)))))",
    "(tc/quick-check 100 prop-reverse)"
  ].join("\n");
}
