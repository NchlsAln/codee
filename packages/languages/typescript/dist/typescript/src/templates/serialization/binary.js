"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "import { pack, unpack } from 'msgpackr';",
        "",
        "const payload = { id: 1, name: 'Ada' };",
        "const blob = pack(payload);",
        "const restored = unpack(blob);",
        "",
        "console.log(restored);"
    ].join("\n");
}
