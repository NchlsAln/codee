"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integrationTemplate = integrationTemplate;
function integrationTemplate() {
    return [
        "(ns integration-test",
        "  (:require [clojure.test :refer [deftest is]]\n            [clj-http.client :as http]))",
        "(deftest health-test",
        "  (let [resp (http/get \"http://localhost:8080/health\")]",
        "    (is (= 200 (:status resp)))))"
    ].join("\n");
}
