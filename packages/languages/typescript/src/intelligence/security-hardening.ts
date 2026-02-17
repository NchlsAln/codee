export const securityHardening = {
  overview: "Harden TypeScript services against common risks.",
  risks: ["prototype pollution", "XSS", "eval usage", "unsafe deps"],
  recommendations: [
    "Validate inputs with schemas",
    "Avoid innerHTML and sanitize HTML",
    "Pin dependencies and run audits",
  ],
};
