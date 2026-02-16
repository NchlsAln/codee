"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
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
exports.PromptEngineering = PromptEngineering;
