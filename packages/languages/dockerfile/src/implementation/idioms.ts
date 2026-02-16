export const dockerfileIdioms: Array<{ name: string; description: string }> = [
  { name: "Layer caching", description: "Order instructions for cache reuse." },
  { name: "Multi-stage", description: "Use multi-stage builds to reduce size." },
  { name: "Minimal base", description: "Prefer slim or distroless images." },
  { name: "Pin versions", description: "Pin base image tags and packages." },
  { name: ".dockerignore", description: "Exclude build context noise." },
  { name: "Non-root", description: "Run as non-root user for security." },
];
