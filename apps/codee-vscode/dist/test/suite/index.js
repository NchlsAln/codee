"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = run;
const node_path_1 = __importDefault(require("node:path"));
const glob_1 = require("glob");
const mocha_1 = __importDefault(require("mocha"));
function run() {
    const mocha = new mocha_1.default({
        ui: "bdd",
        color: true
    });
    const testsRoot = node_path_1.default.resolve(__dirname);
    return (0, glob_1.glob)("**/*.test.js", { cwd: testsRoot }).then((files) => {
        files.forEach((file) => mocha.addFile(node_path_1.default.resolve(testsRoot, file)));
        return new Promise((resolve, reject) => {
            try {
                mocha.run((failures) => {
                    if (failures > 0) {
                        reject(new Error(`${failures} test(s) failed.`));
                    }
                    else {
                        resolve();
                    }
                });
            }
            catch (err) {
                reject(err);
            }
        });
    });
}
