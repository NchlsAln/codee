import * as assert from "node:assert";
import * as vscode from "vscode";

describe("Codee extension", () => {
  it("registers core commands", async () => {
    const extension = vscode.extensions.all.find((ext) => {
      const pkg = ext.packageJSON as { name?: string; publisher?: string };
      return (
        pkg.publisher === "codee" &&
        (pkg.name === "codee-vscode" || pkg.name === "@codee/codee-vscode")
      );
    });
    assert.ok(extension, "Extension not found");

    await extension.activate();

    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes("codee.startSession"));
    assert.ok(commands.includes("codee.openSettings"));
  });
});
