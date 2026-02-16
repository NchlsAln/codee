export function stringsTemplate(): string {
  return [
    "(require '[clojure.string :as str])",
    "(def name \"Ada\")",
    "(println (str/upper-case name))",
    "(println (str/join \"-\" [\"a\" \"b\"]))"
  ].join("\n");
}
