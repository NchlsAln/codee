"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkingTemplate = networkingTemplate;
function networkingTemplate() {
    return [
        "curl -fsSL https://example.com/health",
        "wget -qO- https://example.com/api",
        "ss -tulpn | head -n 5"
    ].join("\n");
}
