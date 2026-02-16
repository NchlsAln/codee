export function cliArgsTemplate(): string {
  return [
    "<?php",
    "$options = getopt('e::', ['env::']);",
    "$env = $options['e'] ?? $options['env'] ?? 'dev';",
    "echo \"env=\" . $env;"
  ].join("\n");
}
