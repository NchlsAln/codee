export function encryptionTemplate(): string {
  return "package main\n\nimport (\n  \"crypto/aes\"\n  \"crypto/cipher\"\n  \"crypto/rand\"\n)\n\nfunc main() {\n  key := make([]byte, 32)\n  nonce := make([]byte, 12)\n  _, _ = rand.Read(key)\n  _, _ = rand.Read(nonce)\n  block, _ := aes.NewCipher(key)\n  gcm, _ := cipher.NewGCM(block)\n  _ = gcm.Seal(nil, nonce, []byte(\"secret\"), nil)\n}\n";
}
