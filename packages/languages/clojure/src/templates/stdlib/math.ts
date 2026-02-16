export function mathTemplate(): string {
  return [
    "(def values [1 4 9 16])",
    "(def roots (map #(Math/sqrt %) values))",
    "(def avg (/ (reduce + values) (count values)))",
    "(println roots avg)"
  ].join("\n");
}
