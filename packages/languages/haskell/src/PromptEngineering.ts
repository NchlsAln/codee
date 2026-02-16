import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("haskell", {
      systemPrompt:
        "You are a Haskell expert. Emphasize purity, explicit types, type classes, and controlled laziness.",
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
        },
        {
          task: "STM",
          input: "transfer",
          output:
            "transfer from to n = atomically $ do\n  a <- readTVar from\n  b <- readTVar to\n  writeTVar from (a - n)\n  writeTVar to (b + n)"
        },
        {
          task: "Strictness",
          input: "sum list",
          output: "sum' xs = foldl' (+) 0 xs"
        }
      ],
      contextHints: [
        "Prefer explicit type signatures for exported functions.",
        "Use strict folds to avoid space leaks.",
        "Keep effects isolated in IO or specialized monads.",
        "Avoid partial functions like head/tail in new code.",
        "Use STM for coordinated concurrency."
      ]
    });
  }
}

