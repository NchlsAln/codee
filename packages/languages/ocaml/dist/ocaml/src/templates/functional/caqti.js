"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caqtiTemplate = caqtiTemplate;
function caqtiTemplate() {
    return [
        "open Caqti_request.Infix",
        "let find_user =",
        "  (Caqti_type.int ->. Caqti_type.string) \"SELECT name FROM users WHERE id = ?\""
    ].join("\n");
}
