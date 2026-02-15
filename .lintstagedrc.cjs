module.exports = {
  "**/*.{ts,tsx,js,jsx,json,md}": ["prettier -w"],
  "**/*.{ts,tsx}": ["eslint --fix"]
};
