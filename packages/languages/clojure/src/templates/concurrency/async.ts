export function asyncTemplate(): string {
  return [
    "(require '[clojure.core.async :as async :refer [go chan >! <! close!]])",
    "(def ch (chan))",
    "(go (>! ch :ok) (close! ch))",
    "(go (println (<! ch)))"
  ].join("\n");
}
