"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartCompression = void 0;
class SmartCompression {
    estimateTokens(content) {
        return Math.ceil(content.length / 4);
    }
    compress(sections, tokenBudget) {
        const sorted = [...sections].sort((a, b) => b.priority - a.priority);
        const result = [];
        let used = 0;
        for (const section of sorted) {
            const tokens = this.estimateTokens(section.content);
            if (used + tokens <= tokenBudget) {
                result.push(section);
                used += tokens;
                continue;
            }
            const remaining = tokenBudget - used;
            if (remaining <= 0) {
                break;
            }
            const truncated = this.truncate(section.content, remaining);
            result.push({ ...section, content: truncated });
            used += this.estimateTokens(truncated);
            break;
        }
        return result;
    }
    truncate(content, tokenBudget) {
        const targetLength = Math.max(200, tokenBudget * 4);
        if (content.length <= targetLength) {
            return content;
        }
        const signatureLines = content
            .split("\n")
            .filter((line) => /^(export\s+)?(class|function|def|interface)\s+/.test(line))
            .slice(0, 20)
            .join("\n");
        const tail = content.slice(content.length - targetLength);
        return [signatureLines, "...", tail].filter(Boolean).join("\n");
    }
    summarize(content) {
        const lines = content.split("\n").slice(0, 20);
        return lines.join("\n");
    }
}
exports.SmartCompression = SmartCompression;
