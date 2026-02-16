"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "require 'yaml'",
        "config = YAML.load_file('config.yml')",
        "puts config['app']"
    ].join("\n");
}
