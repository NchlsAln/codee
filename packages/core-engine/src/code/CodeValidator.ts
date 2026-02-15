import { StreamChunk } from "../engine/types";

export class CodeValidator {
  async *validateStream(stream: AsyncIterable<StreamChunk>, languageId: string): AsyncIterable<StreamChunk> {
    void languageId;
    for await (const chunk of stream) {
      if (chunk.type === "text" || chunk.type === "code") {
        yield { ...chunk, content: sanitizeOutput(chunk.content) };
      } else {
        yield chunk;
      }
    }
  }
}

function sanitizeOutput(content: string): string {
  // eslint-disable-next-line no-control-regex
  return content.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}
