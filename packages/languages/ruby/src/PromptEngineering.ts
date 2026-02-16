import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ruby", {
      systemPrompt: "You are a Ruby expert. Use expressive, idiomatic Ruby patterns.",
      fewShotExamples: [
        {
          task: "Define a model",
          input: "User(name)",
          output: "class User\n  attr_reader :name\n  def initialize(name)\n    @name = name\n  end\nend"
        },
        {
          task: "Transform a list",
          input: "[1, 2, 3]",
          output: "[1, 2, 3].map { |n| n * 2 }"
        }
      ],
      contextHints: ["Prefer frozen_string_literal for libraries.", "Use symbols for hash keys."]
    });
  }
}

