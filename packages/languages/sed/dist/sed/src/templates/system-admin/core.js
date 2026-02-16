"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemAdminTemplate = systemAdminTemplate;
function systemAdminTemplate() {
    return [
        "sed -n '1,10p' /etc/hosts",
        "sed '/^#/d' /etc/fstab"
    ].join("\n");
}
