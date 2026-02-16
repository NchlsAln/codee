"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpIntegrationTests = void 0;
exports.csharpIntegrationTests = [
    {
        name: "csharp-basic",
        source: "public record User(string Name);\nvar user = new User(\"Ada\");",
        expected: "Record and constructor mapping preserved."
    }
];
