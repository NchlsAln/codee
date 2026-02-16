export function hashingTemplate(): string {
  return [
    "require 'digest'",
    "hash = Digest::SHA256.hexdigest('secret')",
    "puts hash"
  ].join("\n");
}
