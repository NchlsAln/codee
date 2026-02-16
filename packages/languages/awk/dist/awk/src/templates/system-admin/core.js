"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemAdminTemplate = systemAdminTemplate;
function systemAdminTemplate() {
    return [
        "awk -F: '{ print $1, $3 }' /etc/passwd",
        "awk '{ total += $2 } END { print total }' disk.txt"
    ].join("\n");
}
