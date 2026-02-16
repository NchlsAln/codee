"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "(require '[clojure.core.async :as async :refer [go chan >! <!]])",
        "(def ch (chan 1))",
        "(go (>! ch :ping))",
        "(go (println (<! ch)))"
    ].join("\n");
}
