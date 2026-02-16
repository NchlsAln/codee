import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ruby", {
      systemPrompt:
        "You are a Ruby expert. Use idiomatic Ruby, clear naming, and lean objects with small responsibilities.",
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
        },
        {
          task: "api",
          input: "Create a Rails health endpoint",
          output: "Use Rails controller with render json: { ok: true } and status: :ok."
        },
        {
          task: "background",
          input: "Process jobs",
          output: "Use Sidekiq worker with perform and keep jobs idempotent."
        }
      ],
      contextHints: [
        "Prefer frozen_string_literal for libraries.",
        "Use symbols for hash keys and keyword arguments.",
        "Favor small objects and modules over large classes.",
        "Use ActiveRecord scopes for queries.",
        "Rescue narrowly and log errors with context."
      ]
    });
  }
}

