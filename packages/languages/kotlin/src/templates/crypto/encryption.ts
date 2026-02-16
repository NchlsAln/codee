export function encryptionTemplate(): string {
  return [
    "import javax.crypto.Cipher",
    "import javax.crypto.KeyGenerator",
    "import javax.crypto.spec.GCMParameterSpec",
    "import java.security.SecureRandom",
    "",
    "val keyGen = KeyGenerator.getInstance(\"AES\")",
    "keyGen.init(256)",
    "val key = keyGen.generateKey()",
    "val iv = ByteArray(12).also { SecureRandom().nextBytes(it) }",
    "val cipher = Cipher.getInstance(\"AES/GCM/NoPadding\")",
    "cipher.init(Cipher.ENCRYPT_MODE, key, GCMParameterSpec(128, iv))",
    "val ciphertext = cipher.doFinal(\"secret\".toByteArray())",
    "println(ciphertext.size)"
  ].join("\n");
}
