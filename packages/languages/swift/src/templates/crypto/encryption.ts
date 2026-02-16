export function encryptionTemplate(): string {
  return [
    "import CryptoKit",
    "",
    "let key = SymmetricKey(size: .bits256)",
    "let sealed = try AES.GCM.seal(Data(\"payload\".utf8), using: key)",
    "print(sealed.ciphertext.count)"
  ].join("\n");
}
