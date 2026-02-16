"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "<?php",
        "$config = parse_ini_file(__DIR__ . '/app.ini', true);",
        "var_dump($config['app']['name'] ?? 'app');"
    ].join("\n");
}
