export function channelsTemplate(): string {
  return [
    "(require '[clojure.core.async :as async :refer [go chan >! <!]])",
    "(def ch (chan 1))",
    "(go (>! ch :ping))",
    "(go (println (<! ch)))"
  ].join("\n");
}
