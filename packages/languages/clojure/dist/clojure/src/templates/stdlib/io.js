"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return [
        "(def path \"data.txt\")",
        "(spit path \"hello\\n\" :append true)",
        "(println (slurp path))"
    ].join("\n");
}
