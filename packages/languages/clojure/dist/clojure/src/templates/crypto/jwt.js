"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "(require '[buddy.sign.jwt :as jwt])",
        "(def token (jwt/sign {:sub 123} \"secret\"))",
        "(println token)"
    ].join("\n");
}
