"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "require 'jwt'",
        "payload = { sub: 123, exp: Time.now.to_i + 3600 }",
        "token = JWT.encode(payload, 'secret', 'HS256')",
        "puts token"
    ].join("\n");
}
