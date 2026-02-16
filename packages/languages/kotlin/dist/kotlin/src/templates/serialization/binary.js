"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "import java.io.ByteArrayOutputStream",
        "import java.io.ObjectOutputStream",
        "",
        "val out = ByteArrayOutputStream()",
        "ObjectOutputStream(out).use { it.writeObject(\"payload\") }",
        "println(out.toByteArray().size)"
    ].join("\n");
}
