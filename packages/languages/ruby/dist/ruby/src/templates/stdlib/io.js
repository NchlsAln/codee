"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return [
        "path = File.join(__dir__, 'data.txt')",
        "File.write(path, \"hello\\n\", mode: 'a')",
        "puts File.read(path)"
    ].join("\n");
}
