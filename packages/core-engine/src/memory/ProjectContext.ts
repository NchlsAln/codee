import { ProjectIndex } from "./ProjectIndex";

export interface ProjectFile {
  path: string;
  content: string;
}

export class ProjectContext {
  private readonly index = new ProjectIndex();

  async getRelevantFiles(projectPath: string, signal: AbortSignal): Promise<ProjectFile[]> {
    await this.index.scan(projectPath, { signal });
    const files = this.index.listFiles().slice(0, 10);
    const contents = await Promise.all(
      files.map(async (file) => ({ path: file.path, content: await this.index.getFileContent(file.path) }))
    );
    return contents;
  }
}
