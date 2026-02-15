"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecureTempDir = createSecureTempDir;
const promises_1 = require("node:fs/promises");
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
async function createSecureTempDir(prefix) {
    const dirPath = await (0, promises_1.mkdtemp)(node_path_1.default.join(node_os_1.default.tmpdir(), prefix));
    try {
        await (0, promises_1.chmod)(dirPath, 0o700);
    }
    catch {
        // Best-effort permissions tightening.
    }
    return {
        path: dirPath,
        cleanup: async () => {
            await (0, promises_1.rm)(dirPath, { recursive: true, force: true });
        }
    };
}
