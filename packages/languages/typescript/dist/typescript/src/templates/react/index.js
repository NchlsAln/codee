"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactTemplate = reactTemplate;
function reactTemplate() {
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
