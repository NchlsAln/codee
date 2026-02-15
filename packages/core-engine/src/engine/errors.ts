import { EngineErrorCategory, EngineUserError } from "./types";

export class EngineError extends Error implements EngineUserError {
  readonly category: EngineErrorCategory;
  readonly suggestion?: string;

  constructor(category: EngineErrorCategory, message: string, suggestion?: string) {
    super(message);
    this.category = category;
    this.suggestion = suggestion;
  }
}

export function toUserError(error: unknown): EngineUserError {
  if (error instanceof EngineError) {
    return { category: error.category, message: error.message, suggestion: error.suggestion };
  }

  return {
    category: "unknown",
    message: error instanceof Error ? error.message : "Unexpected error.",
    suggestion: "Try again or check logs for details."
  };
}
