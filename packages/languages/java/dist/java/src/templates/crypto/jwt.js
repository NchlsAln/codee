"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return "import io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.security.Keys;\n\nimport java.nio.charset.StandardCharsets;\n\npublic class JwtSample {\n  public static void main(String[] args) {\n    byte[] key = \"secretsecretsecretsecret\".getBytes(StandardCharsets.UTF_8);\n    String token = Jwts.builder().subject(\"user-1\").signWith(Keys.hmacShaKeyFor(key)).compact();\n    System.out.println(token);\n  }\n}\n";
}
