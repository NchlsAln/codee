"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "import jwt",
        "",
        "token = jwt.encode({\"sub\": \"user-1\"}, 'secret', algorithm='HS256')",
        "claims = jwt.decode(token, 'secret', algorithms=['HS256'])",
        "print(claims)"
    ].join("\n");
}
