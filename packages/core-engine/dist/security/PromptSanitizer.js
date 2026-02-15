"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeContextContent = sanitizeContextContent;
exports.wrapUntrustedContent = wrapUntrustedContent;
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
function sanitizeContextContent(content) {
    return content.replace(CONTROL_CHARS, "").replace(/```/g, "``\\`");
}
function wrapUntrustedContent(label, content) {
    const sanitized = sanitizeContextContent(content);
    return [
        `[BEGIN UNTRUSTED ${label}]`,
        sanitized,
        `[END UNTRUSTED ${label}]`
    ].join("\n");
}
