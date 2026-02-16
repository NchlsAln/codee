"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return [
        "(require '[compojure.core :refer [GET defroutes]])",
        "(defroutes app",
        "  (GET \"/users/:id\" [id] {:status 200 :body id}))"
    ].join("\n");
}
