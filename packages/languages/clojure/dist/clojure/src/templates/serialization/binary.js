"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "(def data (.getBytes \"hello\"))",
        "(println (count data))"
    ].join("\n");
}
