export function securityTemplate(): string {
  return [
    "awk -F: '$3 == 0 { print $1 }' /etc/passwd",
    "awk '/FAILED/ { print $1, $2, $3 }' auth.log"
  ].join("\n");
}
