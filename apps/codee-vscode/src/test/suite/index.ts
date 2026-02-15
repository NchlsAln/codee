import path from "node:path";
import { glob } from "glob";
import Mocha from "mocha";

export function run(): Promise<void> {
  const mocha = new Mocha({
    ui: "bdd",
    color: true
  });

  const testsRoot = path.resolve(__dirname);

  return glob("**/*.test.js", { cwd: testsRoot }).then((files) => {
    files.forEach((file) => mocha.addFile(path.resolve(testsRoot, file)));

    return new Promise((resolve, reject) => {
      try {
        mocha.run((failures: number) => {
          if (failures > 0) {
            reject(new Error(`${failures} test(s) failed.`));
          } else {
            resolve();
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  });
}
