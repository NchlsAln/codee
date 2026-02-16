"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "import { createHash } from 'node:crypto';",
        "",
        "const digest = createHash('sha256').update('secret').digest('hex');",
        "console.log(digest);"
    ].join("\n");
}
