"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "import jwt from 'jsonwebtoken';",
        "",
        "const token = jwt.sign({ sub: 'user-1' }, 'secret', { algorithm: 'HS256' });",
        "const claims = jwt.verify(token, 'secret');",
        "",
        "console.log(claims);"
    ].join("\n");
}
