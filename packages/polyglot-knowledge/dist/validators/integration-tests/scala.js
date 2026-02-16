"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaIntegrationTests = void 0;
exports.scalaIntegrationTests = [
    {
        name: "scala-basic",
        source: "case class User(name: String)\nval user = User(\"Ada\")",
        expected: "Case class mapping preserved."
    }
];
