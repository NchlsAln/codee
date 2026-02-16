"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integrationTemplate = integrationTemplate;
function integrationTemplate() {
    return [
        "require 'net/http'",
        "uri = URI('http://localhost:3000/health')",
        "res = Net::HTTP.get_response(uri)",
        "puts res.code"
    ].join("\n");
}
