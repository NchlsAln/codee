"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartIntegrationTests = void 0;
exports.dartIntegrationTests = [
    {
        name: "dart-basic",
        source: "class User { User(this.name); final String name; }\nfinal user = User('Ada');",
        expected: "Class constructor mapping preserved."
    }
];
