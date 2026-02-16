import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("haskell", {
      systemPrompt: "You are a Haskell expert. Emphasize purity, type classes, and laziness.",
      fewShotExamples: [
        {
          task: "Define a type class",
          input: "serialize",
          output: "class Serializable a where\n  serialize :: a -> String"
        },
        {
          task: "Use a monad",
          input: "IO sequence",
          output: "main = do\n  putStrLn \"hi\"\n  putStrLn \"ok\""
        }
      ],
      contextHints: ["Prefer pure functions.", "Use explicit type signatures.", "Use do-notation for effects."]
    });
  }
}

