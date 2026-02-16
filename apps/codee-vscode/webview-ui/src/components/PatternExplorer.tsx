import React, { useEffect, useMemo, useState } from "react";
import { PatternConcept, PatternImplementation } from "../protocol";
import { CodeComparison } from "./CodeComparison";
import { LanguageBridge } from "./LanguageBridge";

interface PatternExplorerProps {
  concepts: PatternConcept[];
  implementations: Record<string, PatternImplementation[]>;
  learningQueue: string[];
  selectedConceptId?: string;
  selectedFromLanguage?: string;
  selectedToLanguage?: string;
  onSelectConcept: (conceptId?: string) => void;
  onLearnPattern: (conceptId: string) => void;
  onFeedback: (payload: {
    sourceLanguage: string;
    targetLanguage: string;
    sourceCode: string;
    targetCode: string;
    feedback: string;
  }) => void;
}

const categoryLabels: Record<PatternConcept["category"], string> = {
  "control-flow": "Control Flow",
  "data-structures": "Data Structures",
  concurrency: "Concurrency",
  paradigms: "Paradigms"
};

export const PatternExplorer: React.FC<PatternExplorerProps> = ({
  concepts,
  implementations,
  learningQueue,
  selectedConceptId,
  selectedFromLanguage,
  selectedToLanguage,
  onSelectConcept,
  onLearnPattern,
  onFeedback
}) => {
  const categories = useMemo(() => {
    return Array.from(new Set(concepts.map((concept) => concept.category)));
  }, [concepts]);
  const [activeCategory, setActiveCategory] = useState<PatternConcept["category"]>(
    selectedConceptId
      ? concepts.find((concept) => concept.id === selectedConceptId)?.category ?? "control-flow"
      : "control-flow"
  );

  const filteredConcepts = concepts.filter((concept) => concept.category === activeCategory);
  const activeConcept = selectedConceptId
    ? concepts.find((concept) => concept.id === selectedConceptId)
    : filteredConcepts[0];

  const conceptImplementations = activeConcept ? implementations[activeConcept.id] ?? [] : [];
  const [fromLanguage, setFromLanguage] = useState<string>(
    selectedFromLanguage ?? conceptImplementations[0]?.language ?? "python"
  );
  const [toLanguage, setToLanguage] = useState<string>(
    selectedToLanguage ?? conceptImplementations[1]?.language ?? "rust"
  );

  useEffect(() => {
    if (selectedConceptId) {
      const category = concepts.find((concept) => concept.id === selectedConceptId)?.category;
      if (category) {
        setActiveCategory(category);
      }
    }
  }, [concepts, selectedConceptId]);

  useEffect(() => {
    if (!activeConcept) {
      return;
    }
    const nextImplementations = implementations[activeConcept.id] ?? [];
    if (nextImplementations.length === 0) {
      return;
    }
    setFromLanguage((current) => {
      if (current && nextImplementations.some((impl) => impl.language === current)) {
        return current;
      }
      return nextImplementations[0].language;
    });
    setToLanguage((current) => {
      if (current && nextImplementations.some((impl) => impl.language === current)) {
        return current;
      }
      return nextImplementations[1]?.language ?? nextImplementations[0].language;
    });
  }, [activeConcept, implementations]);

  const fromSnippet = conceptImplementations.find((impl) => impl.language === fromLanguage);
  const toSnippet = conceptImplementations.find((impl) => impl.language === toLanguage);
  const semanticNotes = activeConcept ? buildSemanticNotes(activeConcept.id) : [];
  const explanation = activeConcept ? buildExplanation(activeConcept.id) : "";
  const handleFeedback = () => {
    const feedback = window.prompt("What should be improved about this translation?");
    if (!feedback) {
      return;
    }
    onFeedback({
      sourceLanguage: fromLanguage,
      targetLanguage: toLanguage,
      sourceCode: fromSnippet?.snippet ?? "",
      targetCode: toSnippet?.snippet ?? "",
      feedback
    });
  };

  return (
    <div className="pattern-explorer">
      <aside className="pattern-explorer-sidebar">
        <div className="pattern-category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={category === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        <div className="pattern-list">
          {filteredConcepts.map((concept) => (
            <button
              key={concept.id}
              className={concept.id === activeConcept?.id ? "active" : ""}
              onClick={() => onSelectConcept(concept.id)}
            >
              <span>{concept.name}</span>
              <small>{concept.description}</small>
            </button>
          ))}
        </div>
      </aside>

      <section className="pattern-explorer-content">
        {activeConcept ? (
          <>
            <header className="pattern-header">
              <div>
                <h2>{activeConcept.name}</h2>
                <p>{activeConcept.description}</p>
                <div className="pattern-tags">
                  {activeConcept.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="pattern-actions">
                <vscode-button
                  appearance={learningQueue.includes(activeConcept.id) ? "secondary" : "primary"}
                  onClick={() => onLearnPattern(activeConcept.id)}
                >
                  {learningQueue.includes(activeConcept.id) ? "In Learning Queue" : "Learn this pattern"}
                </vscode-button>
              </div>
            </header>

            <div className="pattern-comparison-controls">
              <label>
                From
                <select value={fromLanguage} onChange={(event) => setFromLanguage(event.target.value)}>
                  {conceptImplementations.map((impl) => (
                    <option key={impl.language} value={impl.language}>
                      {impl.language}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                To
                <select value={toLanguage} onChange={(event) => setToLanguage(event.target.value)}>
                  {conceptImplementations.map((impl) => (
                    <option key={impl.language} value={impl.language}>
                      {impl.language}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <CodeComparison
              sourceLabel={fromLanguage}
              targetLabel={toLanguage}
              sourceCode={fromSnippet?.snippet ?? ""}
              targetCode={toSnippet?.snippet ?? ""}
              semanticDifferences={semanticNotes}
              explanation={explanation}
              onFeedback={handleFeedback}
            />

            <LanguageBridge
              from={fromLanguage}
              to={toLanguage}
              notes={semanticNotes}
              progress={{ learned: learningQueue.length, total: concepts.length }}
            />
          </>
        ) : (
          <div className="pattern-empty">Select a concept to explore cross-language patterns.</div>
        )}
      </section>
    </div>
  );
};

function buildSemanticNotes(conceptId: string): string[] {
  switch (conceptId) {
    case "data-structures.list":
      return [
        "Filters run before transforms to keep iterators lazy.",
        "Rust iterators avoid intermediate allocations."
      ];
    case "control-flow.async-await":
      return [
        "Promises map to futures; Rust requires explicit Result handling.",
        "Async functions return awaitable types in every language."
      ];
    case "control-flow.exceptions":
      return ["Rust uses Result instead of throwing exceptions.", "TypeScript prefers typed errors."];
    case "paradigms.dataclasses":
      return ["Rust derives create boilerplate for structs.", "TypeScript interfaces are structural."];
    case "paradigms.decorators":
      return ["Rust attributes compile-time expand; decorators are runtime."];
    default:
      return ["Idiomatic structure matches the target ecosystem."];
  }
}

function buildExplanation(conceptId: string): string {
  switch (conceptId) {
    case "data-structures.list":
      return "Collections map to lazy iterators in Rust to avoid allocations while keeping intent clear.";
    case "control-flow.async-await":
      return "Async code is modeled as futures in Rust, so we return Result and await explicitly.";
    case "control-flow.exceptions":
      return "Rust prefers explicit error values instead of exceptions for predictable control flow.";
    case "paradigms.dataclasses":
      return "Structs with derives capture data shapes while keeping ownership explicit.";
    case "paradigms.decorators":
      return "Attributes are compile-time hooks in Rust, so we express decorator intent as macros.";
    default:
      return "This translation favors the idioms of the target language.";
  }
}
