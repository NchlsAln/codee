"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "<?php",
        "$options = getopt('e::', ['env::']);",
        "$env = $options['e'] ?? $options['env'] ?? 'dev';",
        "echo \"env=\" . $env;"
    ].join("\n");
}
