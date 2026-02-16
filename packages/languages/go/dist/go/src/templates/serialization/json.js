"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTemplate = jsonTemplate;
function jsonTemplate() {
    return "package main\n\nimport (\n  \"encoding/json\"\n  \"fmt\"\n)\n\ntype User struct {\n  ID int `json:\"id\"`\n  Email string `json:\"email\"`\n}\n\nfunc main() {\n  payload, _ := json.Marshal(User{ID: 1, Email: \"ada@example.com\"})\n  fmt.Println(string(payload))\n}\n";
}
