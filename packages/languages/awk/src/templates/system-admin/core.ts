export function systemAdminTemplate(): string {
  return [
    "awk -F: '{ print $1, $3 }' /etc/passwd",
    "awk '{ total += $2 } END { print total }' disk.txt"
  ].join("\n");
}
