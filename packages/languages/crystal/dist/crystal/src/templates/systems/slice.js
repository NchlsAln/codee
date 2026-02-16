"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceTemplate = sliceTemplate;
function sliceTemplate() {
    return [
        "bytes = Bytes[1, 2, 3]",
        "slice = bytes[0, 2]",
        "puts slice"
    ].join("\n");
}
