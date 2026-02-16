"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return "import java.security.MessageDigest;\n\npublic class HashSample {\n  public static void main(String[] args) throws Exception {\n    MessageDigest digest = MessageDigest.getInstance(\"SHA-256\");\n    byte[] hash = digest.digest(\"secret\".getBytes());\n    System.out.println(hash.length);\n  }\n}\n";
}
