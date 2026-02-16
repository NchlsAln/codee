export function ffiCTemplate(): string {
  return [
    "(require '[clojure.java.shell :refer [sh]])",
    "(println (:out (sh \"./native_tool\" \"ping\")))"
  ].join("\n");
}
