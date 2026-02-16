"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "require 'digest'",
        "hash = Digest::SHA256.hexdigest('secret')",
        "puts hash"
    ].join("\n");
}
