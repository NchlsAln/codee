export function reactTemplate(): string {
  return [
    "import React from 'react';",
    "",
    "type Props = { message: string };",
    "",
    "export const Banner: React.FC<Props> = ({ message }) => {",
    "  return <div role=\"status\">{message}</div>;",
    "};"
  ].join("\n");
}
