"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "import pureconfig._",
        "import pureconfig.generic.auto._",
        "",
        "case class AppConfig(port: Int, host: String)",
        "val config = ConfigSource.default.loadOrThrow[AppConfig]",
        "println(config)"
    ].join("\n");
}
