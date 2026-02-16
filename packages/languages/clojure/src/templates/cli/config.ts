export function cliConfigTemplate(): string {
  return [
    "(require '[clojure.edn :as edn])",
    "(def config (edn/read-string (slurp \"config.edn\")))",
    "(println config)"
  ].join("\n");
}
