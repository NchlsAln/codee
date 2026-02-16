"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTemplate = encryptionTemplate;
function encryptionTemplate() {
    return "#include <openssl/evp.h>\n#include <vector>\n\nint main() {\n  EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();\n  std::vector<unsigned char> key(32, 0);\n  std::vector<unsigned char> iv(12, 0);\n  EVP_EncryptInit_ex(ctx, EVP_aes_256_gcm(), nullptr, key.data(), iv.data());\n  EVP_CIPHER_CTX_free(ctx);\n  return 0;\n}\n";
}
