"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftIntegrationTests = void 0;
exports.swiftIntegrationTests = [
    {
        name: "swift-basic",
        source: "struct User { let name: String }\nlet user = User(name: \"Ada\")",
        expected: "Struct mapping preserved."
    }
];
