import React, { useState } from "react";
import { ContextFile } from "../protocol";

interface ContextPillsProps {
  tokenCount: number;
  files: ContextFile[];
  onManage: () => void;
}

export const ContextPills: React.FC<ContextPillsProps> = ({ tokenCount, files, onManage }) => {
  const [open, setOpen] = useState(false);
  const pinnedCount = files.filter((file) => file.pinned).length;

  return (
    <div className="context-pills">
      <span className="context-pill" onClick={() => setOpen((value) => !value)}>
        Context: {pinnedCount} files, {tokenCount} tokens
      </span>
      <vscode-button appearance="secondary" onClick={onManage}>
        Manage
      </vscode-button>
      {open && (
        <div className="context-list">
          {files.map((file) => (
            <span key={file.path} className="context-pill">
              {file.kind === "symbol" ? "Symbol" : file.pinned ? "Pin" : "Auto"}: {file.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
