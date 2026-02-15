import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("graphql", {
      systemPrompt: "You are a GraphQL expert. Emphasize clear schemas and resolvers.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
