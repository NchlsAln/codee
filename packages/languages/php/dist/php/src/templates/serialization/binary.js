"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "<?php",
        "$packed = pack('N', 42);",
        "$unpacked = unpack('Nvalue', $packed);",
        "var_dump($unpacked['value']);"
    ].join("\n");
}
