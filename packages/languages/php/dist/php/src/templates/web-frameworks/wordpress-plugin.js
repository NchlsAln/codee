"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordpressPluginTemplate = wordpressPluginTemplate;
function wordpressPluginTemplate() {
    return [
        "<?php",
        "/*",
        "Plugin Name: Codee Sample Plugin",
        "*/",
        "",
        "add_action('init', function () {",
        "  // Plugin init",
        "});",
        ""
    ].join("\n");
}
