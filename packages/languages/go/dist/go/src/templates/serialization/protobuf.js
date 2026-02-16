"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return "package main\n\nimport (\n  \"google.golang.org/protobuf/proto\"\n)\n\nfunc main() {\n  user := &User{Id: 1, Email: \"ada@example.com\"}\n  data, _ := proto.Marshal(user)\n  _ = data\n}\n";
}
