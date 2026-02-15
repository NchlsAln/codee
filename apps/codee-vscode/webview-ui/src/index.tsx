import React from "react";
import { createRoot } from "react-dom/client";
import { provideVSCodeDesignSystem, allComponents } from "@vscode/webview-ui-toolkit";
import { App } from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./styles/vscode-theme.css";
import "./styles/app.css";

provideVSCodeDesignSystem().register(allComponents);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
