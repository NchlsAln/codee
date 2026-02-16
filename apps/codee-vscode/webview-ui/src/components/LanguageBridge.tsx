import React from "react";

interface LanguageBridgeProps {
  from: string;
  to: string;
  notes: string[];
  progress: { learned: number; total: number };
}

export const LanguageBridge: React.FC<LanguageBridgeProps> = ({ from, to, notes, progress }) => {
  const percentage = progress.total > 0 ? Math.round((progress.learned / progress.total) * 100) : 0;
  return (
    <div className="language-bridge">
      <div className="language-bridge-header">
        <h3>
          {from} → {to}
        </h3>
        <span className="language-bridge-progress">
          {progress.learned}/{progress.total} learned ({percentage}%)
        </span>
      </div>
      <div className="language-bridge-graph">
        <div className="bridge-node">{from}</div>
        <div className="bridge-path" />
        <div className="bridge-node">{to}</div>
      </div>
      <ul className="language-bridge-notes">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
};
