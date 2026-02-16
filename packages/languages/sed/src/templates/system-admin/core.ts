export function systemAdminTemplate(): string {
  return [
    "sed -n '1,10p' /etc/hosts",
    "sed '/^#/d' /etc/fstab"
  ].join("\n");
}
