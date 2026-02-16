"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "import io.jsonwebtoken.Jwts",
        "import io.jsonwebtoken.security.Keys",
        "",
        "val key = Keys.hmacShaKeyFor(\"secretsecretsecretsecret\".toByteArray())",
        "val token = Jwts.builder().setSubject(\"user-1\").signWith(key).compact()",
        "println(token)"
    ].join("\n");
}
