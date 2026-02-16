"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinIntegrationTests = void 0;
exports.kotlinIntegrationTests = [
    {
        name: "kotlin-basic",
        source: "data class User(val name: String)\nval user = User(\"Ada\")",
        expected: "Data class mapping and constructor usage preserved."
    }
];
