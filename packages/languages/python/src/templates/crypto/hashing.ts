export function hashingTemplate(): string {
  return [
    "import hashlib",
    "",
    "digest = hashlib.sha256(b'secret').hexdigest()",
    "print(digest)"
  ].join("\n");
}
