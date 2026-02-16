"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "import configparser",
        "",
        "config = configparser.ConfigParser()",
        "config.read('app.ini')",
        "",
        "host = config.get('server', 'host', fallback='localhost')",
        "port = config.getint('server', 'port', fallback=8080)",
        "print(host, port)"
    ].join("\n");
}
