"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return [
        "path = Path.join(__DIR__, \"data.txt\")",
        "File.write!(path, \"hello\\n\", [:append])",
        "IO.puts(File.read!(path))"
    ].join("\n");
}
