export function encryptionTemplate(): string {
  return [
    "import javax.crypto.Cipher",
    "import javax.crypto.spec.SecretKeySpec",
    "",
    "val key = new SecretKeySpec(\"1234567812345678\".getBytes(\"UTF-8\"), \"AES\")",
    "val cipher = Cipher.getInstance(\"AES/ECB/PKCS5Padding\")",
    "cipher.init(Cipher.ENCRYPT_MODE, key)",
    "val encrypted = cipher.doFinal(\"payload\".getBytes(\"UTF-8\"))",
    "println(encrypted.length)"
  ].join("\n");
}
