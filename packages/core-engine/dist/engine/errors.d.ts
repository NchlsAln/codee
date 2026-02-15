import { EngineErrorCategory, EngineUserError } from "./types";
export declare class EngineError extends Error implements EngineUserError {
    readonly category: EngineErrorCategory;
    readonly suggestion?: string;
    constructor(category: EngineErrorCategory, message: string, suggestion?: string);
}
export declare function toUserError(error: unknown): EngineUserError;
