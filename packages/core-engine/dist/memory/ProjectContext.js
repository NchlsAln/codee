"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectContext = void 0;
const ProjectIndex_1 = require("./ProjectIndex");
class ProjectContext {
    index = new ProjectIndex_1.ProjectIndex();
    async getRelevantFiles(projectPath, signal) {
        await this.index.scan(projectPath, { signal });
        const files = this.index.listFiles().slice(0, 10);
        const contents = await Promise.all(files.map(async (file) => ({ path: file.path, content: await this.index.getFileContent(file.path) })));
        return contents;
    }
}
exports.ProjectContext = ProjectContext;
