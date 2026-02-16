export function networkingTemplate(): string {
  return [
    "awk 'BEGIN { \"curl -s https://example.com/health\" | getline line; print line }'",
    "awk 'BEGIN { \"ping -c 1 example.com\" | getline line; print line }'"
  ].join("\n");
}
