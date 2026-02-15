import { StreamChunk } from "../engine/types";
export declare class CodeValidator {
    validateStream(stream: AsyncIterable<StreamChunk>, languageId: string): AsyncIterable<StreamChunk>;
}
