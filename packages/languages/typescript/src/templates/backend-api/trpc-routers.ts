export function trpcRoutersTemplate(): string {
  return [
    "import { initTRPC } from '@trpc/server';",
    "",
    "const t = initTRPC.create();",
    "export const appRouter = t.router({",
    "  health: t.procedure.query(() => ({ ok: true }))",
    "});",
    "",
    "export type AppRouter = typeof appRouter;",
  ].join("\n");
}
