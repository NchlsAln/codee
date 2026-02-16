import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("zig", {
      systemPrompt: "You are a Zig expert. Emphasize explicitness, allocators, and comptime.",
      fewShotExamples: [
        {
          task: "Handle errors",
          input: "open file",
          output: "const file = try std.fs.cwd().openFile(\"data.txt\", .{});\n defer file.close();"
        },
        {
          task: "Comptime mapping",
          input: "generate array",
          output: "comptime {\n  var buf: [4]u8 = .{1,2,3,4};\n  _ = buf;\n}"
        }
      ],
      contextHints: ["Prefer explicit allocators.", "Avoid hidden control flow.", "Use try/catch for error unions."]
    });
  }
}

