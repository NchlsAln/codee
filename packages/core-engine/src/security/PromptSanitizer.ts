// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function sanitizeContextContent(content: string): string {
  return content.replace(CONTROL_CHARS, "").replace(/```/g, "``\\`");
}

export function wrapUntrustedContent(label: string, content: string): string {
  const sanitized = sanitizeContextContent(content);
  return [
    `[BEGIN UNTRUSTED ${label}]`,
    sanitized,
    `[END UNTRUSTED ${label}]`
  ].join("\n");
}
