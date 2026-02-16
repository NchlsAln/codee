import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("clojure", {
      systemPrompt: "You are a Clojure expert. Emphasize immutability, macros, and data-driven design.",
      fewShotExamples: [
        {
          task: "Threading pipeline",
          input: "transform a list",
          output: "(->> items (map #(* 2 %)) (filter even?))"
        },
        {
          task: "Protocol usage",
          input: "define polymorphism",
          output: "(defprotocol Greeter (greet [this]))\n(defrecord User [name] Greeter (greet [_] (str \"hi \" name)))"
        }
      ],
      contextHints: ["Prefer immutable data structures.", "Use -> and ->> for pipelines.", "Use protocols for polymorphism."]
    });
  }
}

