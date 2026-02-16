"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return "#include <openssl/sha.h>\n#include <iostream>\n\nint main() {\n  unsigned char hash[SHA256_DIGEST_LENGTH];\n  SHA256(reinterpret_cast<const unsigned char*>(\"secret\"), 6, hash);\n  std::cout << static_cast<int>(hash[0]) << \"\\n\";\n  return 0;\n}\n";
}
