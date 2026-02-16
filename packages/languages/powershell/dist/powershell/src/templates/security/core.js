"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityTemplate = securityTemplate;
function securityTemplate() {
    return [
        "$cred = Get-Credential",
        "$secret = ConvertTo-SecureString 'P@ssw0rd' -AsPlainText -Force",
        "Protect-CmsMessage -To 'ops@example.com' -Content 'Rotate keys'"
    ].join("\n");
}
