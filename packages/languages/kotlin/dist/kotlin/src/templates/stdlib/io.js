"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return [
        "import java.nio.file.Files",
        "import java.nio.file.Path",
        "",
        "val path = Path.of(\"data.txt\")",
        "if (!Files.exists(path)) {",
        "  Files.writeString(path, \"hello\")",
        "}",
        "val content = Files.readString(path)",
        "println(content.trim())"
    ].join("\n");
}
