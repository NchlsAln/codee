"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlRuntime = void 0;
exports.htmlRuntime = {
    name: "Browser HTML parser",
    supportedVersions: ["HTML Living Standard"],
    renderingModel: {
        parser: "Tokenization and tree construction into a DOM",
        dom: "DOM API for document manipulation",
        accessibility: "Accessibility tree derived from DOM and ARIA",
        layout: "DOM and CSS cascade form the render tree"
    },
    environment: {
        engines: ["Blink", "WebKit", "Gecko"],
        apis: ["DOM", "Accessibility", "Fetch", "History"]
    },
    performance: {
        notes: ["Minimize DOM depth", "Defer non-critical resources", "Use semantic elements"]
    },
    validation: {
        tools: ["W3C Validator", "axe", "Lighthouse"],
        linting: ["htmlhint", "eslint-plugin-jsx-a11y"]
    }
};
