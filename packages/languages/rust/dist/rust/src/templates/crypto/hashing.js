"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "use sha2::{Digest, Sha256};",
        "",
        "let mut hasher = Sha256::new();",
        "hasher.update(b\"secret\");",
        "let digest = hasher.finalize();",
        "",
        "println!(\"{:x}\", digest);"
    ].join("\n");
}
