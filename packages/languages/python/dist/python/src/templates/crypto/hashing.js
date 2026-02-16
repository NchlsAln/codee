"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "import hashlib",
        "",
        "digest = hashlib.sha256(b'secret').hexdigest()",
        "print(digest)"
    ].join("\n");
}
