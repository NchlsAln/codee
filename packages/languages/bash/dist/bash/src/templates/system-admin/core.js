"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemAdminTemplate = systemAdminTemplate;
function systemAdminTemplate() {
    return [
        "ps aux | grep -i nginx",
        "systemctl status sshd",
        "id -u \"$USER\"",
        "crontab -l"
    ].join("\n");
}
