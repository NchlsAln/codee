"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssRuntime = void 0;
exports.cssRuntime = {
    name: "Browser CSS engine",
    supportedVersions: ["CSS2.1", "CSS3", "Selectors Level 4"],
    renderingModel: {
        cascade: "Cascade + specificity resolve final styles",
        layout: "Flow, flexbox, grid, and positioned layouts",
        painting: "Render tree painted to the screen",
        animations: "Transitions and keyframes applied on compositor"
    },
    performance: {
        notes: ["Avoid expensive selectors", "Prefer transform/opacity", "Minimize layout thrash"]
    },
    validation: {
        tools: ["stylelint", "csstree"],
        tooling: ["PostCSS", "Autoprefixer"]
    }
};
