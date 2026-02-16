export function wordpressPluginTemplate(): string {
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
