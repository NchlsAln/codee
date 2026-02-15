import { WebviewMessage } from "../protocol";

export type VSCodeApi = {
  postMessage: (message: WebviewMessage) => void;
  getState: () => unknown;
  setState: (state: unknown) => void;
};

export function getVSCodeApi(): VSCodeApi {
  if (typeof acquireVsCodeApi === "function") {
    return acquireVsCodeApi();
  }
  return {
    postMessage: () => void 0,
    getState: () => undefined,
    setState: () => void 0
  };
}
