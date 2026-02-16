import React from "react";

interface CodeComparisonProps {
  sourceLabel: string;
  targetLabel: string;
  sourceCode: string;
  targetCode: string;
  semanticDifferences?: string[];
  explanation?: string;
  onFeedback?: () => void;
}

export const CodeComparison: React.FC<CodeComparisonProps> = ({
  sourceLabel,
  targetLabel,
  sourceCode,
  targetCode,
  semanticDifferences,
  explanation,
  onFeedback
}) => {
  return (
    <div className="code-comparison">
      <div className="code-comparison-pane">
        <h3>{sourceLabel}</h3>
        <pre>{sourceCode}</pre>
      </div>
      <div className="code-comparison-pane">
        <h3>{targetLabel}</h3>
        <pre>{targetCode}</pre>
      </div>
      {semanticDifferences && semanticDifferences.length > 0 && (
        <div className="code-comparison-notes">
          <h4>Semantic differences</h4>
          <ul>
            {semanticDifferences.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}
      {explanation && (
        <div className="code-comparison-explanation">
          <h4>Why this way?</h4>
          <p>{explanation}</p>
        </div>
      )}
      {onFeedback && (
        <div className="code-comparison-feedback">
          <vscode-button appearance="secondary" onClick={onFeedback}>
            This translation was poor
          </vscode-button>
        </div>
      )}
    </div>
  );
};
