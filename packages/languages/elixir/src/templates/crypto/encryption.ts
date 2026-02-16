export function encryptionTemplate(): string {
  return [
    "key = :crypto.strong_rand_bytes(32)",
    "iv = :crypto.strong_rand_bytes(12)",
    "{ciphertext, tag} = :crypto.crypto_one_time_aead(:aes_256_gcm, key, iv, \"secret\", <<>>, true)",
    "IO.inspect({ciphertext, tag})"
  ].join("\n");
}
