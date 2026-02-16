"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTemplate = protobufTemplate;
function protobufTemplate() {
    return [
        "import protobuf from 'protobufjs';",
        "",
        "const root = protobuf.Root.fromJSON({",
        "  nested: {",
        "    User: {",
        "      fields: {",
        "        id: { type: 'int32', id: 1 },",
        "        email: { type: 'string', id: 2 }",
        "      }",
        "    }",
        "  }",
        "});",
        "const User = root.lookupType('User');",
        "const message = User.create({ id: 1, email: 'ada@example.com' });",
        "const buffer = User.encode(message).finish();",
        "const decoded = User.decode(buffer);",
        "",
        "console.log(decoded);"
    ].join("\n");
}
