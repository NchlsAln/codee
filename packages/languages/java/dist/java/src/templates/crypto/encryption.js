"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return "import javax.crypto.Cipher;\nimport javax.crypto.KeyGenerator;\nimport javax.crypto.SecretKey;\nimport javax.crypto.spec.GCMParameterSpec;\nimport java.security.SecureRandom;\n\npublic class EncryptSample {\n  public static void main(String[] args) throws Exception {\n    KeyGenerator keyGen = KeyGenerator.getInstance(\"AES\");\n    keyGen.init(256);\n    SecretKey key = keyGen.generateKey();\n    byte[] iv = new byte[12];\n    new SecureRandom().nextBytes(iv);\n\n    Cipher cipher = Cipher.getInstance(\"AES/GCM/NoPadding\");\n    cipher.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(128, iv));\n    byte[] ciphertext = cipher.doFinal(\"secret\".getBytes());\n    System.out.println(ciphertext.length);\n  }\n}\n";
}
