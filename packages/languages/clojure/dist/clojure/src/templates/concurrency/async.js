"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "(require '[clojure.core.async :as async :refer [go chan >! <! close!]])",
        "(def ch (chan))",
        "(go (>! ch :ok) (close! ch))",
        "(go (println (<! ch)))"
    ].join("\n");
}
