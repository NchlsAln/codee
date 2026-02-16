"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return [
        "use std::fs;",
        "",
        "fs::write(\"data.txt\", \"hello\").unwrap();",
        "let content = fs::read_to_string(\"data.txt\").unwrap();",
        "",
        "println!(\"{}\", content);"
    ].join("\n");
}
