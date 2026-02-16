export function hashingTemplate(): string {
  return [
    "(require '[buddy.core.hash :as hash])",
    "(println (hash/sha256 \"secret\"))"
  ].join("\n");
}
