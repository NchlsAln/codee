"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeGenerator = void 0;
class DefaultStrategy {
    async *generate(context) {
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
class CodeGenerator {
    languageRegistry;
    constructor(languageRegistry) {
        this.languageRegistry = languageRegistry;
    }
    createStrategy(task, languageId) {
        void task;
        void languageId;
        return new DefaultStrategy();
    }
    buildSystemPrompt(languageId, fallback) {
        if (!languageId) {
            return fallback;
        }
        const definition = this.languageRegistry.getLanguage(languageId);
        return definition?.promptEngineering.getSystemPrompt() ?? fallback;
    }
}
exports.CodeGenerator = CodeGenerator;
