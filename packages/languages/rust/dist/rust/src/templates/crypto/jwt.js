"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return [
        "use jsonwebtoken::{encode, EncodingKey, Header};",
        "use serde::Serialize;",
        "",
        "#[derive(Serialize)]",
        "struct Claims { sub: String }",
        "",
        "let token = encode(&Header::default(), &Claims { sub: \"user-1\".into() }, &EncodingKey::from_secret(b\"secret\"))?;",
        "println!(\"{}\", token);"
    ].join("\n");
}
