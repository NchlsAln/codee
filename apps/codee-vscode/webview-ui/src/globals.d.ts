/// <reference types="react" />
/// <reference types="react-dom" />

import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare function acquireVsCodeApi(): {
  postMessage: (message: unknown) => void;
  getState: () => unknown;
  setState: (state: unknown) => void;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vscode-button": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        appearance?: string;
      };
    }
  }
}

export {};
