"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTemplate = authTemplate;
function authTemplate() {
    return "import org.springframework.http.HttpStatus;\nimport org.springframework.web.server.ResponseStatusException;\n\npublic class AuthGuard {\n  public static void requireToken(String token) {\n    if (!\"Bearer secret\".equals(token)) {\n      throw new ResponseStatusException(HttpStatus.FORBIDDEN);\n    }\n  }\n}\n";
}
