"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityTemplate = securityTemplate;
function securityTemplate() {
    return [
        "sed -n 's/\\(password=\\).*/\\1REDACTED/p' config.ini",
        "sed -n 's/\\(token=\\).*/\\1REDACTED/p' app.log"
    ].join("\n");
}
