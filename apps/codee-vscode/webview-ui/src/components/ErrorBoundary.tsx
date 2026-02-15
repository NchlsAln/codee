import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  message?: string;
}

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error): void {
    console.error("Webview crashed", error);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Codee UI crashed</h2>
          <p>{this.state.message}</p>
          <p>Reload the webview to recover.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
