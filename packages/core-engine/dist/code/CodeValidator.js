"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeValidator = void 0;
class CodeValidator {
    async *validateStream(stream, languageId) {
        void languageId;
        for await (const chunk of stream) {
            if (chunk.type === "text" || chunk.type === "code") {
                yield { ...chunk, content: sanitizeOutput(chunk.content) };
            }
            else {
                yield chunk;
            }
        }
    }
}
exports.CodeValidator = CodeValidator;
function sanitizeOutput(content) {
    // eslint-disable-next-line no-control-regex
    return content.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}
