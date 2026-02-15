"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const test_electron_1 = require("@vscode/test-electron");
async function main() {
    const extensionDevelopmentPath = node_path_1.default.resolve(__dirname, "../..");
    const extensionTestsPath = node_path_1.default.resolve(__dirname, "./suite");
    await (0, test_electron_1.runTests)({
        extensionDevelopmentPath,
        extensionTestsPath
    });
}
main().catch((error) => {
    console.error("Failed to run extension tests", error);
    process.exit(1);
});
