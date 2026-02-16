import * as vscode from "vscode";
import path from "node:path";
import {
  BatchTranslator,
  ProjectAnalyzer,
  buildTranslationNotes,
  type BatchTranslationResult,
  type ProjectTranslationResult,
  type TranslatedFile,
  type TranslationStatus
} from "@codee/polyglot-knowledge";
import { GitIntegration } from "./GitIntegration";

interface ReviewFileState {
  sourcePath: string;
  targetPath: string;
  status: "auto" | "review" | "skip" | "accepted";
  output: string;
}

interface TranslationReviewContext {
  projectRoot: string;
  from: string;
  to: string;
  outputRoot: string;
  result: BatchTranslationResult;
  baseBranch?: string;
}

export class TranslationReviewPanel {
  private static instance: TranslationReviewPanel | undefined;
  private readonly panel: vscode.WebviewPanel;
  private readonly files = new Map<string, ReviewFileState>();
  private context: TranslationReviewContext;
  private translationResult: ProjectTranslationResult | undefined;

  private constructor(private readonly extensionUri: vscode.Uri, context: TranslationReviewContext) {
    this.panel = vscode.window.createWebviewPanel(
      "codee.translationReview",
      "Codee: Translation Review",
      vscode.ViewColumn.One,
      { enableScripts: true }
    );
    this.context = context;
    this.initializeFiles(context.result);
    this.panel.webview.onDidReceiveMessage((message: { type: string; payload?: unknown }) => {
      void this.handleMessage(message);
    });
    this.panel.onDidDispose(() => {
      TranslationReviewPanel.instance = undefined;
    });
    this.render();
  }

  static createOrShow(extensionUri: vscode.Uri, context: TranslationReviewContext): TranslationReviewPanel {
    if (TranslationReviewPanel.instance) {
      TranslationReviewPanel.instance.context = context;
      TranslationReviewPanel.instance.initializeFiles(context.result);
      TranslationReviewPanel.instance.render();
      TranslationReviewPanel.instance.panel.reveal();
      return TranslationReviewPanel.instance;
    }
    TranslationReviewPanel.instance = new TranslationReviewPanel(extensionUri, context);
    return TranslationReviewPanel.instance;
  }

  private initializeFiles(result: BatchTranslationResult): void {
    this.files.clear();
    for (const file of result.files) {
      this.files.set(file.sourcePath, {
        sourcePath: file.sourcePath,
        targetPath: file.targetPath,
        status: file.status === "skip" ? "skip" : "review",
        output: file.output
      });
      if (file.status === "auto") {
        const entry = this.files.get(file.sourcePath);
        if (entry) {
          entry.status = "auto";
        }
      }
    }
  }

  private render(): void {
    this.panel.webview.html = this.renderHtml();
  }

  private renderReviewUI(): void {
    if (!this.translationResult) {
      return;
    }
    this.initializeFilesFromTranslation(this.translationResult.files);
    this.render();
  }

  private initializeFilesFromTranslation(files: TranslatedFile[]): void {
    this.files.clear();
    for (const file of files) {
      const status: TranslationStatus = file.warnings.length > 0 || file.confidence < 0.7 ? "review" : "auto";
      this.files.set(file.originalPath, {
        sourcePath: file.originalPath,
        targetPath: file.targetPath,
        status,
        output: file.content
      });
    }
  }

  private renderHtml(): string {
    const data = Array.from(this.files.values()).map((file) => ({
      sourcePath: file.sourcePath,
      targetPath: file.targetPath,
      status: file.status
    }));
    const json = JSON.stringify({ files: data });
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Translation Review</title>
<style>
  body { font-family: Segoe UI, sans-serif; margin: 0; padding: 16px; color: #1b1b1b; }
  .container { display: grid; grid-template-columns: 260px 1fr; gap: 16px; height: calc(100vh - 32px); }
  .sidebar { border-right: 1px solid #ddd; padding-right: 12px; overflow-y: auto; }
  .file { padding: 6px 8px; border-radius: 6px; margin-bottom: 4px; cursor: pointer; }
  .file:hover { background: #f2f2f2; }
  .status { font-size: 12px; opacity: 0.7; }
  .main { display: flex; flex-direction: column; gap: 12px; }
  .actions { display: flex; gap: 8px; }
  button { padding: 6px 12px; border-radius: 6px; border: 1px solid #ccc; background: #fff; cursor: pointer; }
  button.primary { background: #1f6feb; color: #fff; border-color: #1f6feb; }
  pre { background: #f8f8f8; padding: 12px; border-radius: 8px; overflow: auto; }
</style>
</head>
<body>
  <div class="container">
    <div class="sidebar" id="fileList"></div>
    <div class="main">
      <div class="actions">
        <button class="primary" id="acceptAll">Accept All</button>
        <button id="skipAll">Skip All</button>
        <button id="commit">Commit to Branch</button>
      </div>
      <div>
        <h3 id="fileTitle">Select a file</h3>
        <div class="actions">
          <button class="primary" id="accept">Accept</button>
          <button id="skip">Skip</button>
          <button id="open">Open</button>
        </div>
      </div>
      <pre id="diff">Select a file to preview</pre>
    </div>
  </div>
<script>
  const vscode = acquireVsCodeApi();
  const data = ${json};
  const fileList = document.getElementById("fileList");
  const diff = document.getElementById("diff");
  const fileTitle = document.getElementById("fileTitle");
  let selected = null;

  function renderFiles() {
    fileList.innerHTML = "";
    data.files.forEach((file) => {
      const item = document.createElement("div");
      item.className = "file";
      item.textContent = file.sourcePath.split(/[\\/]/).pop();
      item.dataset.path = file.sourcePath;
      const status = document.createElement("div");
      status.className = "status";
      status.textContent = file.status;
      item.appendChild(status);
      item.addEventListener("click", () => selectFile(file.sourcePath));
      fileList.appendChild(item);
    });
  }

  function selectFile(path) {
    selected = path;
    const file = data.files.find((item) => item.sourcePath === path);
    if (!file) return;
    fileTitle.textContent = path;
    vscode.postMessage({ type: "selectFile", payload: path });
  }

  document.getElementById("acceptAll").addEventListener("click", () => vscode.postMessage({ type: "acceptAll" }));
  document.getElementById("skipAll").addEventListener("click", () => vscode.postMessage({ type: "skipAll" }));
  document.getElementById("commit").addEventListener("click", () => vscode.postMessage({ type: "commit" }));
  document.getElementById("accept").addEventListener("click", () => selected && vscode.postMessage({ type: "acceptFile", payload: selected }));
  document.getElementById("skip").addEventListener("click", () => selected && vscode.postMessage({ type: "skipFile", payload: selected }));
  document.getElementById("open").addEventListener("click", () => selected && vscode.postMessage({ type: "openFile", payload: selected }));

  window.addEventListener("message", (event) => {
    const message = event.data;
    if (message.type === "fileDiff") {
      diff.textContent = message.payload.diff;
    }
    if (message.type === "updateStatus") {
      const file = data.files.find((item) => item.sourcePath === message.payload.path);
      if (file) {
        file.status = message.payload.status;
        renderFiles();
      }
    }
  });

  renderFiles();
</script>
</body>
</html>`;
  }

  private async handleMessage(message: { type: string; payload?: unknown }): Promise<void> {
    switch (message.type) {
      case "selectFile":
        await this.handleSelectFile(String(message.payload ?? ""));
        return;
      case "acceptFile":
        await this.acceptFile(String(message.payload ?? ""));
        return;
      case "skipFile":
        this.updateStatus(String(message.payload ?? ""), "skip");
        return;
      case "acceptAll":
        await this.acceptAll();
        return;
      case "skipAll":
        this.skipAll();
        return;
      case "openFile":
        await this.openFile(String(message.payload ?? ""));
        return;
      case "commit":
        await this.commit();
        return;
      default:
        return;
    }
  }

  private postMessage(message: { type: string; [key: string]: unknown }): void {
    void this.panel.webview.postMessage(message);
  }

  private async startTranslation(projectPath: string, targetLang: string): Promise<void> {
    const analyzer = new ProjectAnalyzer();
    const structure = await analyzer.analyze(projectPath);

    const translator = new BatchTranslator(projectPath);
    const result = await translator.translateProject(structure, targetLang as ProjectTranslationResult["targetLanguage"], (completed, total) => {
      this.postMessage({ type: "progress", completed, total });
    });

    this.translationResult = result;
    this.renderReviewUI();
  }

  private async handleSelectFile(sourcePath: string): Promise<void> {
    const file = this.files.get(sourcePath);
    if (!file) {
      return;
    }
    const diff = `--- ${file.sourcePath}\n+++ ${file.targetPath}\n${file.output}`;
    this.panel.webview.postMessage({ type: "fileDiff", payload: { diff } });
  }

  private async acceptFile(sourcePath: string): Promise<void> {
    const file = this.files.get(sourcePath);
    if (!file) {
      return;
    }
    await this.writeOutput(file);
    this.updateStatus(sourcePath, "accepted");
  }

  private async acceptAll(): Promise<void> {
    for (const file of this.files.values()) {
      if (file.status === "skip") {
        continue;
      }
      await this.writeOutput(file);
      this.updateStatus(file.sourcePath, "accepted");
    }
    vscode.window.showInformationMessage("Translation files written to disk.");
  }

  private skipAll(): void {
    for (const file of this.files.values()) {
      this.updateStatus(file.sourcePath, "skip");
    }
  }

  private updateStatus(sourcePath: string, status: ReviewFileState["status"]): void {
    const entry = this.files.get(sourcePath);
    if (!entry) {
      return;
    }
    entry.status = status;
    void this.panel.webview.postMessage({ type: "updateStatus", payload: { path: sourcePath, status } });
  }

  private async writeOutput(file: ReviewFileState): Promise<void> {
    const uri = vscode.Uri.file(file.targetPath);
    await vscode.workspace.fs.createDirectory(vscode.Uri.file(path.dirname(file.targetPath)));
    await vscode.workspace.fs.writeFile(uri, Buffer.from(file.output, "utf-8"));
  }

  private async openFile(sourcePath: string): Promise<void> {
    const entry = this.files.get(sourcePath);
    if (!entry) {
      return;
    }
    const uri = vscode.Uri.file(entry.targetPath);
    try {
      const doc = await vscode.workspace.openTextDocument(uri);
      await vscode.window.showTextDocument(doc, { preview: true });
      return;
    } catch {
      const doc = await vscode.workspace.openTextDocument({
        content: entry.output,
        language: this.context.to
      });
      await vscode.window.showTextDocument(doc, { preview: true });
    }
  }

  private async commit(): Promise<void> {
    const git = new GitIntegration(this.context.projectRoot);
    if (!(await git.isGitRepo())) {
      vscode.window.showWarningMessage("Git repository not detected. Skipping commit.");
      return;
    }

    const baseBranch = this.context.baseBranch ?? (await git.currentBranch());
    const branchName = `translate/${this.context.from}-to-${this.context.to}-${new Date().toISOString().slice(0, 10)}`;
    await git.createBranch(branchName);

    const accepted = Array.from(this.files.values()).filter(
      (file) => file.status === "accepted" || file.status === "auto"
    );
    for (const file of accepted) {
      await this.writeOutput(file);
      this.updateStatus(file.sourcePath, "accepted");
    }
    const files = accepted.map((file) => file.targetPath);
    const notes = buildTranslationNotes(this.context.result, this.context.to);
    const notesPath = path.join(this.context.projectRoot, "TRANSLATION_NOTES.md");
    await vscode.workspace.fs.writeFile(vscode.Uri.file(notesPath), Buffer.from(notes, "utf-8"));
    files.push(notesPath);

    await git.stageFiles(files);
    const message = `feat: Translate ${this.context.from} project to ${this.context.to}\n\n- ${accepted.length} files translated\n- ${this.countStatus("review")} files need manual review\n- See TRANSLATION_NOTES.md`;
    await git.commit(message);
    await git.openPullRequest(branchName);
    await git.checkoutBranch(baseBranch);
    vscode.window.showInformationMessage(`Translation committed on ${branchName}.`);
  }

  private countStatus(status: ReviewFileState["status"]): number {
    return Array.from(this.files.values()).filter((file) => file.status === status).length;
  }
}
