"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityTemplate = securityTemplate;
function securityTemplate() {
    return [
        "chmod 700 ~/.ssh",
        "gpg --batch --yes -c secrets.txt",
        "export API_TOKEN=\"$(cat /run/secrets/api_token)\""
    ].join("\n");
}
