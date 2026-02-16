"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkingTemplate = networkingTemplate;
function networkingTemplate() {
    return [
        "Invoke-RestMethod https://example.com/api/health",
        "Invoke-WebRequest https://example.com",
        "Test-NetConnection -ComputerName example.com -Port 443"
    ].join("\n");
}
