export function systemAdminTemplate(): string {
  return [
    "ps aux | grep -i nginx",
    "systemctl status sshd",
    "id -u \"$USER\"",
    "crontab -l"
  ].join("\n");
}
