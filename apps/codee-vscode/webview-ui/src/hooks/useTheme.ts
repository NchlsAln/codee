import { useEffect, useState } from "react";
import { getHighlighter, Highlighter } from "shiki";

let highlighter: Highlighter | null = null;

export const useTheme = () => {
  const [theme, setTheme] = useState(getCurrentTheme());

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(getCurrentTheme()));
    observer.observe(document.body, { attributes: true, attributeFilter: ["class", "data-codee-theme"] });
    return () => observer.disconnect();
  }, []);

  return theme;
};

export async function highlightCode(code: string, language: string): Promise<string> {
  if (!highlighter) {
    highlighter = await getHighlighter({ themes: ["github-dark", "github-light"], langs: [] });
  }

  if (language && !highlighter.getLoadedLanguages().includes(language as never)) {
    try {
      await highlighter.loadLanguage(language as never);
    } catch (error) {
      return escapeHtml(code);
    }
  }

  const theme = getCurrentTheme() === "light" ? "github-light" : "github-dark";
  try {
    return highlighter.codeToHtml(code, { lang: language, theme });
  } catch (error) {
    return escapeHtml(code);
  }
}

function getCurrentTheme(): "light" | "dark" | "high-contrast" {
  const override = document.body.dataset.codeeTheme as "light" | "dark" | "high-contrast" | undefined;
  if (override) {
    return override;
  }
  if (document.body.classList.contains("vscode-high-contrast")) {
    return "high-contrast";
  }
  return document.body.classList.contains("vscode-light") ? "light" : "dark";
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
