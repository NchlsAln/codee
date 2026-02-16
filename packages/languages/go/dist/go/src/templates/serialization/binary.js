"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return "package main\n\nimport (\n  \"bytes\"\n  \"encoding/gob\"\n)\n\ntype User struct {\n  ID int\n  Email string\n}\n\nfunc main() {\n  var buf bytes.Buffer\n  _ = gob.NewEncoder(&buf).Encode(User{ID: 1, Email: \"ada@example.com\"})\n}\n";
}
