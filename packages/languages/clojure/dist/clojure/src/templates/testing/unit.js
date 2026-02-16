"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "(ns sample-test",
        "  (:require [clojure.test :refer [deftest is]]))",
        "(deftest adds-test",
        "  (is (= 4 (+ 2 2))))"
    ].join("\n");
}
