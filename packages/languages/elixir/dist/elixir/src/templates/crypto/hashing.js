"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "hash = :crypto.hash(:sha256, \"secret\")",
        "IO.inspect(Base.encode16(hash))"
    ].join("\n");
}
