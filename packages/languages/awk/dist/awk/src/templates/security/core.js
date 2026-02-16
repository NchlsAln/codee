"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityTemplate = securityTemplate;
function securityTemplate() {
    return [
        "awk -F: '$3 == 0 { print $1 }' /etc/passwd",
        "awk '/FAILED/ { print $1, $2, $3 }' auth.log"
    ].join("\n");
}
