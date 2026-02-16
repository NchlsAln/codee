"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "<?php",
        "use Firebase\\JWT\\JWT;",
        "",
        "$payload = ['sub' => 123, 'exp' => time() + 3600];",
        "$token = JWT::encode($payload, 'secret', 'HS256');",
        "echo $token;"
    ].join("\n");
}
