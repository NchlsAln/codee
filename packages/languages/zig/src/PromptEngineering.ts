import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("zig", {
      systemPrompt:
        "You are a Zig expert. Emphasize explicit allocators, error sets, comptime metaprogramming, and zero hidden allocations.",
      fewShotExamples: [
        {
          task: "Handle errors",
          input: "open file",
          output: "const file = try std.fs.cwd().openFile(\"data.txt\", .{});\ndefer file.close();"
        },
        {
          task: "Allocator usage",
          input: "append bytes",
          output:
            "var gpa = std.heap.GeneralPurposeAllocator(.{}){};\ndefer _ = gpa.deinit();\nconst allocator = gpa.allocator();\nvar list = std.ArrayList(u8).init(allocator);\ndefer list.deinit();\ntry list.appendSlice(\"ok\");"
        },
        {
          task: "Comptime mapping",
          input: "generate array",
          output: "comptime {\n  const buf: [4]u8 = .{ 1, 2, 3, 4 };\n  _ = buf;\n}"
        },
        {
          task: "C interop",
          input: "call strlen",
          output: "const c = @cImport({ @cInclude(\"string.h\"); });\nconst len = c.strlen(\"hi\");"
        }
      ],
      contextHints: [
        "Prefer explicit allocators and free resources with defer.",
        "Use narrow error sets instead of anyerror.",
        "Avoid @ptrCast unless absolutely needed.",
        "Use slices over pointers for bounds safety.",
        "Keep comptime logic isolated from runtime paths."
      ]
    });
  }
}

