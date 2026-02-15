import { StreamChunk, UserRequest } from "../engine/types";
import { LanguageRegistry } from "@codee/languages";
import { ModelSelection } from "../llm/ModelRouter";

interface GeneratorContext {
  model: ModelSelection;
  request: UserRequest;
  context: string;
  systemPrompt: string;
  abortSignal: AbortSignal;
}

interface GenerationStrategy {
  generate(context: GeneratorContext): AsyncIterable<StreamChunk>;
}

class DefaultStrategy implements GenerationStrategy {
  async *generate(context: GeneratorContext): AsyncIterable<StreamChunk> {
    const requestContext = {
      systemPrompt: context.systemPrompt,
      context: context.context,
      userRequest: context.request,
      modelId: context.model.modelId,
      temperature: context.model.temperature,
      task: context.request.task
    };

    const stream = await context.model.adapter.generate(requestContext, context.abortSignal);
    for await (const chunk of stream.stream) {
      yield chunk;
    }
  }
}

export class CodeGenerator {
  constructor(private readonly languageRegistry: LanguageRegistry) {}

  createStrategy(task: UserRequest["task"], languageId: string): GenerationStrategy {
    void task;
    void languageId;
    return new DefaultStrategy();
  }

  buildSystemPrompt(languageId: string | undefined, fallback: string): string {
    if (!languageId) {
      return fallback;
    }
    const definition = this.languageRegistry.getLanguage(languageId);
    return definition?.promptEngineering.getSystemPrompt() ?? fallback;
  }
}
