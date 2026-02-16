export function encryptionTemplate(): string {
  return [
    "(require '[buddy.core.crypto :as crypto])",
    "(def key (byte-array 32))",
    "(def encrypted (crypto/encrypt key (.getBytes \"secret\")))",
    "(println (count encrypted))"
  ].join("\n");
}
