export const puppetAstPatterns: Array<{ pattern: string; description: string }> = [
  { pattern: "\\bclass\\s+\\w+", description: "Class definition" },
  { pattern: "\\bdefine\\s+\\w+", description: "Defined type" },
  { pattern: "\\binclude\\s+\\w+", description: "Class inclusion" },
  { pattern: "\\brequire\\s*=>", description: "Resource ordering" },
  { pattern: "\\bbefore\\s*=>", description: "Resource ordering" },
  { pattern: "\\bnotify\\s*=>", description: "Notifications" },
  { pattern: "\\bensure\\s*=>", description: "State enforcement" },
];
