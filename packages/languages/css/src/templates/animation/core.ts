export function animationTemplate(): string {
  return [
    "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }",
    ".fade-in { animation: fade 300ms ease-in; }"
  ].join("\n");
}
