"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "import java.util.Properties",
        "",
        "val props = Properties()",
        "props.load(ClassLoader.getSystemResourceAsStream(\"app.properties\"))",
        "println(props.getProperty(\"server.host\"))"
    ].join("\n");
}
