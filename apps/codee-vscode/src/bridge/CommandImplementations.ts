import * as vscode from "vscode";
import path from "path";
import { EngineHost } from "./EngineHost";
import { ChatController } from "./ChatController";
import { ContextProvider } from "./ContextProvider";

export async function explainSelected(
  chatController: ChatController,
  contextProvider: ContextProvider
): Promise<void> {
  const selection = contextProvider.getSelectionText();
  if (!selection) {
    vscode.window.showInformationMessage("Select code to explain.");
    return;
  }

  const languageId = contextProvider.getActiveLanguageId();
  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Codee: Explaining selection",
      cancellable: false
    },
    async () => {
      const explanation = await chatController.explainSelection(selection, languageId);
      const doc = await vscode.workspace.openTextDocument({
        content: explanation,
        language: "markdown"
      });
      await vscode.window.showTextDocument(doc, { preview: true });
    }
  );
}

export async function generateUnitTests(
  chatController: ChatController,
  contextProvider: ContextProvider
): Promise<void> {
  const selection = contextProvider.getSelectionText();
  if (!selection) {
    vscode.window.showInformationMessage("Select code to generate tests.");
    return;
  }

  const languageId = contextProvider.getActiveLanguageId() ?? "typescript";
  const filePath = contextProvider.getActiveFilePath();
  const fileName = filePath ? path.basename(filePath) : "module";

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Codee: Generating tests",
      cancellable: false
    },
    async () => {
      const tests = await chatController.runGenerateTests(selection, languageId, fileName);
      const doc = await vscode.workspace.openTextDocument({
        content: tests,
        language: languageId === "python" ? "python" : "typescript"
      });
      await vscode.window.showTextDocument(doc, { preview: true });
    }
  );
}

export async function refactorSelection(
  engineHost: EngineHost,
  contextProvider: ContextProvider
): Promise<void> {
  const readOnly = vscode.workspace.getConfiguration("codee").get<boolean>("features.readOnlyMode");
  if (readOnly) {
    vscode.window.showWarningMessage("Read-only mode is enabled. Refactors are disabled.");
    return;
  }
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.selection.isEmpty) {
    vscode.window.showInformationMessage("Select code to refactor.");
    return;
  }

  const projectPath = contextProvider.getProjectPath();
  const filePath = contextProvider.getActiveFilePath();
  if (!projectPath || !filePath) {
    vscode.window.showInformationMessage("Open a workspace file to refactor.");
    return;
  }

  const selectionStart = editor.document.offsetAt(editor.selection.start);
  const selectionEnd = editor.document.offsetAt(editor.selection.end);
  const baseName = path.basename(filePath, path.extname(filePath));
  const newFile = path.join(path.dirname(filePath), `${baseName}.refactor.ts`);

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Codee: Preparing refactor",
      cancellable: false
    },
    async () => {
      const refactor = await engineHost.refactorSelection({
        projectPath,
        sourceFile: filePath,
        selectionStart,
        selectionEnd,
        exportName: `${baseName}Refactor`,
        newFile
      });

      if (refactor.changeSet.edits.length === 0) {
        vscode.window.showInformationMessage("No refactor changes generated.");
        return;
      }

      const choice = await vscode.window.showInformationMessage(
        "Apply refactor changes?",
        { modal: true },
        "Apply"
      );

      if (choice === "Apply") {
        await engineHost.applyRefactor(projectPath, refactor);
        vscode.window.showInformationMessage("Refactor applied.");
      }
    }
  );
}

export async function clearLocalData(engineHost: EngineHost): Promise<void> {
  const confirmation = await vscode.window.showWarningMessage(
    "This will delete all local Codee data for the current user. Continue?",
    { modal: true },
    "Delete"
  );

  if (confirmation !== "Delete") {
    return;
  }

  await engineHost.clearLocalData();
  vscode.window.showInformationMessage("Codee local data cleared.");
}

export async function openDocumentation(): Promise<void> {
  const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri;
  if (workspaceRoot) {
    const docsUri = vscode.Uri.joinPath(workspaceRoot, "docs", "README.md");
    try {
      const doc = await vscode.workspace.openTextDocument(docsUri);
      await vscode.window.showTextDocument(doc, { preview: true });
      return;
    } catch {
      // Fall through to external docs.
    }
  }

  const uri = vscode.Uri.parse("https://github.com/your-org/codee/tree/main/docs");
  await vscode.env.openExternal(uri);
}

export async function openFeedback(): Promise<void> {
  const uri = vscode.Uri.parse("https://github.com/your-org/codee/issues/new/choose");
  await vscode.env.openExternal(uri);
}

export async function openEngineLogs(engineHost: EngineHost): Promise<void> {
  engineHost.showLogs();
}

export async function restartEngine(engineHost: EngineHost, contextProvider: ContextProvider): Promise<void> {
  await engineHost.restart(contextProvider.getProjectPath());
  vscode.window.showInformationMessage("Codee engine restarted.");
}

export async function downloadModel(): Promise<void> {
  const model = await vscode.window.showInputBox({
    title: "Download Model",
    prompt: "Enter the Ollama model to download",
    value: "wizardcoder"
  });

  if (!model) {
    return;
  }

  const terminal = vscode.window.createTerminal("Codee: Ollama");
  terminal.show();
  terminal.sendText(`ollama pull ${model}`);
}

export async function exportDebugLog(
  engineHost: EngineHost,
  chatController: ChatController,
  contextProvider: ContextProvider
): Promise<void> {
  const debugState = engineHost.getDebugState();
  const sessionId = chatController.getSessionId();
  const messages = sessionId ? chatController.getMessages(sessionId) : [];
  const payload = {
    sessionId,
    projectPath: contextProvider.getProjectPath(),
    activeFile: contextProvider.getActiveFilePath(),
    debugState,
    messages,
    exportedAt: new Date().toISOString()
  };

  const uri = await vscode.window.showSaveDialog({
    title: "Export Codee Debug Log",
    filters: { JSON: ["json"] }
  });
  if (!uri) {
    return;
  }
  await vscode.workspace.fs.writeFile(uri, Buffer.from(JSON.stringify(payload, null, 2)));
  vscode.window.showInformationMessage("Debug log exported.");
}
