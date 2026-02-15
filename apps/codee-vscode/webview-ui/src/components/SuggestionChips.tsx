import React from "react";

interface SuggestionChipsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export const SuggestionChips: React.FC<SuggestionChipsProps> = ({ suggestions, onSelect }) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="suggestion-chips">
      {suggestions.map((suggestion) => (
        <vscode-button
          key={suggestion}
          appearance="secondary"
          className="suggestion-chip"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </vscode-button>
      ))}
    </div>
  );
};
