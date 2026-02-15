const { optimize } = require("svgo");
const { readFileSync, writeFileSync } = require("fs");
const { globSync } = require("glob");

const files = globSync("apps/**/resources/**/*.svg", { nodir: true });

files.forEach((file) => {
  const input = readFileSync(file, "utf-8");
  const result = optimize(input, { multipass: true });
  if (result.data) {
    writeFileSync(file, result.data, "utf-8");
  }
});

console.log(`Optimized ${files.length} SVG assets.`);
