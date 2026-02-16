"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "payload = Marshal.dump({ id: 1 })",
        "data = Marshal.load(payload)",
        "puts data[:id]"
    ].join("\n");
}
