# File Tree

Generated: 2026-02-16T09:57:38.113Z

````
.
|-- .codee
|   `-- config.json
|-- .devcontainer
|   `-- devcontainer.json
|-- .github
|   |-- ISSUE_TEMPLATE
|   |   |-- bug_report.md
|   |   |-- config.yml
|   |   |-- feature_request.md
|   |   |-- polyglot-bug.md
|   |   `-- question.md
|   |-- workflows
|   |   |-- ci.yml
|   |   |-- codeql.yml
|   |   `-- release.yml
|   |-- dependabot.yml
|   `-- pull_request_template.md
|-- .husky
|   |-- _
|   |   |-- .gitignore
|   |   |-- applypatch-msg
|   |   |-- commit-msg
|   |   |-- h
|   |   |-- husky.sh
|   |   |-- post-applypatch
|   |   |-- post-checkout
|   |   |-- post-commit
|   |   |-- post-merge
|   |   |-- post-rewrite
|   |   |-- pre-applypatch
|   |   |-- pre-auto-gc
|   |   |-- pre-commit
|   |   |-- pre-merge-commit
|   |   |-- pre-push
|   |   |-- pre-rebase
|   |   `-- prepare-commit-msg
|   `-- pre-commit
|-- .qodo
|   |-- agents
|   `-- workflows
|-- .tours
|   `-- polyglot-architecture.tour
|-- .vscode
|   `-- settings.json
|-- apps
|   |-- codee-desktop
|   |   |-- src
|   |   |   |-- migrations
|   |   |   |   `-- migration-manager.ts
|   |   |   |-- onboarding
|   |   |   |   `-- first-run.ts
|   |   |   |-- telemetry
|   |   |   |   |-- sentry.ts
|   |   |   |   `-- telemetry-service.ts
|   |   |   |-- update
|   |   |   |   |-- auto-updater.ts
|   |   |   |   `-- update-notification.ts
|   |   |   `-- main.ts
|   |   |-- package.json
|   |   |-- README.md
|   |   |-- tsconfig.json
|   |   `-- tsconfig.tsbuildinfo
|   |-- codee-vscode
|   |   |-- apps
|   |   |   `-- codee-vscode
|   |   |-- resources
|   |   |   |-- codee.png
|   |   |   `-- codee.svg
|   |   |-- src
|   |   |   |-- bridge
|   |   |   |   |-- ChatController.ts
|   |   |   |   |-- CommandImplementations.ts
|   |   |   |   |-- ContextProvider.ts
|   |   |   |   |-- EngineHost.ts
|   |   |   |   |-- MessageProtocol.ts
|   |   |   |   `-- SettingsSync.ts
|   |   |   |-- coding-assistant
|   |   |   |   |-- code-actions.ts
|   |   |   |   |-- GitIntegration.ts
|   |   |   |   |-- hover-translations.ts
|   |   |   |   |-- inline-completion.ts
|   |   |   |   |-- learning-mode-service.ts
|   |   |   |   |-- learning-mode.ts
|   |   |   |   |-- refactoring-menu.ts
|   |   |   |   `-- TranslationReviewPanel.ts
|   |   |   |-- commands
|   |   |   |   |-- explain.ts
|   |   |   |   |-- generate-tests.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- open-settings.ts
|   |   |   |   |-- refactor.ts
|   |   |   |   |-- session.ts
|   |   |   |   `-- switch-language.ts
|   |   |   |-- configuration
|   |   |   |   |-- defaults.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- KeychainStore.ts
|   |   |   |   |-- profile.schema.json
|   |   |   |   |-- README.md
|   |   |   |   |-- schema.ts
|   |   |   |   |-- SettingsManager.ts
|   |   |   |   |-- SettingsWebviewPanel.ts
|   |   |   |   `-- types.ts
|   |   |   |-- panels
|   |   |   |   |-- chat-panel.ts
|   |   |   |   |-- engine-inspector-panel.ts
|   |   |   |   |-- help-panel.ts
|   |   |   |   |-- onboarding-panel.ts
|   |   |   |   |-- project-panel.ts
|   |   |   |   `-- settings-panel.ts
|   |   |   |-- providers
|   |   |   |   |-- code-action-provider.ts
|   |   |   |   |-- hover-provider.ts
|   |   |   |   `-- sidebar-provider.ts
|   |   |   |-- services
|   |   |   |   |-- engine-client.ts
|   |   |   |   |-- engine-protocol.ts
|   |   |   |   |-- state-store.ts
|   |   |   |   `-- status-bar.ts
|   |   |   |-- telemetry
|   |   |   |   `-- TelemetryService.ts
|   |   |   |-- test
|   |   |   |   |-- suite
|   |   |   |   |   |-- extension.test.ts
|   |   |   |   |   `-- index.ts
|   |   |   |   `-- runTest.ts
|   |   |   |-- utils
|   |   |   |   `-- webview.ts
|   |   |   |-- webview
|   |   |   |   |-- CodeActionHandler.ts
|   |   |   |   |-- FileMentionProvider.ts
|   |   |   |   |-- MessageProtocol.ts
|   |   |   |   |-- SymbolMentionProvider.ts
|   |   |   |   |-- WebviewMessageHandler.ts
|   |   |   |   `-- WebviewStateManager.ts
|   |   |   `-- extension.ts
|   |   |-- webview-ui
|   |   |   |-- src
|   |   |   |   |-- components
|   |   |   |   |   |-- ChatContainer.tsx
|   |   |   |   |   |-- CodeBlock.tsx
|   |   |   |   |   |-- CodeComparison.tsx
|   |   |   |   |   |-- ContextPills.tsx
|   |   |   |   |   |-- ConversationList.tsx
|   |   |   |   |   |-- ErrorBoundary.tsx
|   |   |   |   |   |-- InputArea.tsx
|   |   |   |   |   |-- LanguageBridge.tsx
|   |   |   |   |   |-- MessageItem.tsx
|   |   |   |   |   |-- MessageList.tsx
|   |   |   |   |   |-- PatternExplorer.tsx
|   |   |   |   |   `-- SuggestionChips.tsx
|   |   |   |   |-- hooks
|   |   |   |   |   |-- useChat.ts
|   |   |   |   |   |-- useStreaming.ts
|   |   |   |   |   `-- useTheme.ts
|   |   |   |   |-- styles
|   |   |   |   |   |-- app.css
|   |   |   |   |   `-- vscode-theme.css
|   |   |   |   |-- utils
|   |   |   |   |   `-- vscode.ts
|   |   |   |   |-- App.tsx
|   |   |   |   |-- globals.d.ts
|   |   |   |   |-- index.tsx
|   |   |   |   |-- protocol.ts
|   |   |   |   `-- types.ts
|   |   |   |-- esbuild.config.cjs
|   |   |   |-- index.html
|   |   |   |-- package.json
|   |   |   `-- tsconfig.json
|   |   |-- .vscodeignore
|   |   |-- LICENSE
|   |   |-- package.json
|   |   |-- README.md
|   |   |-- tsconfig.json
|   |   |-- tsconfig.test.json
|   |   |-- tsconfig.test.tsbuildinfo
|   |   `-- tsconfig.tsbuildinfo
|   `-- README.md
|-- docs
|   |-- api
|   |   |-- core-engine.md
|   |   `-- extension-api.md
|   |-- architecture
|   |   |-- data-flow.md
|   |   |-- language-server-lifecycle.md
|   |   |-- overview.md
|   |   |-- package-dependencies.md
|   |   `-- security.md
|   |-- assets
|   |   |-- demo
|   |   |   |-- conversion-example.py
|   |   |   |-- conversion-expected.rs
|   |   |   `-- polyglot-conversion.svg
|   |   |-- hero.svg
|   |   `-- workflow.svg
|   |-- deployment
|   |   |-- building.md
|   |   |-- distribution.md
|   |   `-- self-hosting.md
|   |-- development
|   |   |-- adding-languages.md
|   |   |-- debugging.md
|   |   |-- performance.md
|   |   |-- polyglot-system.md
|   |   |-- security-hardening.md
|   |   |-- setup.md
|   |   `-- testing.md
|   |-- languages
|   |   |-- adding-new.md
|   |   |-- capabilities.md
|   |   `-- supported.md
|   |-- marketing
|   |   |-- announcement-draft.md
|   |   |-- demo-video-script.md
|   |   `-- product-hunt.md
|   |-- polyglot
|   |   |-- adding-patterns.md
|   |   |-- capabilities.md
|   |   |-- demo-script.md
|   |   |-- limitations.md
|   |   `-- quickstart.md
|   |-- faq.md
|   |-- privacy.md
|   |-- README.md
|   |-- status.md
|   |-- troubleshooting.md
|   `-- user-guide.md
|-- e2e
|   |-- fixtures
|   |   |-- sample-project
|   |   |   |-- src
|   |   |   |   |-- app.ts
|   |   |   |   `-- utils.py
|   |   |   `-- README.md
|   |   `-- webview-harness
|   |       `-- index.html
|   |-- tests
|   |   `-- webview-chat.spec.ts
|   |-- playwright.config.ts
|   `-- tsconfig.json
|-- packages
|   |-- core-engine
|   |   |-- src
|   |   |   |-- code
|   |   |   |   |-- CodeGenerator.ts
|   |   |   |   |-- CodeParser.ts
|   |   |   |   |-- CodeValidator.ts
|   |   |   |   |-- LanguagePrompts.ts
|   |   |   |   |-- LanguageRegistry.ts
|   |   |   |   `-- types.ts
|   |   |   |-- config
|   |   |   |   |-- defaults.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- migrations.ts
|   |   |   |   |-- schema.ts
|   |   |   |   |-- SettingsManager.ts
|   |   |   |   `-- types.ts
|   |   |   |-- engine
|   |   |   |   |-- CodeeEngine.ts
|   |   |   |   |-- ContextBuilder.ts
|   |   |   |   |-- errors.ts
|   |   |   |   |-- SessionManager.ts
|   |   |   |   `-- types.ts
|   |   |   |-- intelligence
|   |   |   |   |-- ArchitectureAnalyzer.ts
|   |   |   |   |-- DocumentationGenerator.ts
|   |   |   |   |-- file-system.ts
|   |   |   |   |-- git-client.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- learning.ts
|   |   |   |   |-- MultiFileRefactor.ts
|   |   |   |   |-- NaturalLanguageToCode.ts
|   |   |   |   |-- PolyglotTranslator.ts
|   |   |   |   |-- ProjectTranslator.ts
|   |   |   |   |-- TestGenerator.ts
|   |   |   |   `-- types.ts
|   |   |   |-- llm
|   |   |   |   |-- BaseAdapter.ts
|   |   |   |   |-- MockAdapter.ts
|   |   |   |   |-- ModelRouter.ts
|   |   |   |   |-- OllamaAdapter.ts
|   |   |   |   `-- OpenAIAdapter.ts
|   |   |   |-- memory
|   |   |   |   |-- CodeContextAssembler.ts
|   |   |   |   |-- ConversationMemory.ts
|   |   |   |   |-- ConversationStore.ts
|   |   |   |   |-- ProjectContext.ts
|   |   |   |   |-- ProjectIndex.ts
|   |   |   |   |-- SmartCompression.ts
|   |   |   |   |-- VectorMemory.ts
|   |   |   |   `-- VectorStore.ts
|   |   |   |-- perf
|   |   |   |   |-- benchmarks.ts
|   |   |   |   |-- index.ts
|   |   |   |   `-- PerformanceMonitor.ts
|   |   |   |-- security
|   |   |   |   |-- PromptSanitizer.ts
|   |   |   |   `-- SecureTemp.ts
|   |   |   |-- test
|   |   |   |   |-- fixtures
|   |   |   |   |   `-- sample-project
|   |   |   |   |       |-- src
|   |   |   |   |       |   |-- index.ts
|   |   |   |   |       |   `-- utils.ts
|   |   |   |   |       `-- README.md
|   |   |   |   |-- integration
|   |   |   |   |   `-- CodeContextAssembler.test.ts
|   |   |   |   |-- unit
|   |   |   |   |   |-- ContextBuilder.test.ts
|   |   |   |   |   |-- ConversationMemory.test.ts
|   |   |   |   |   |-- OllamaAdapter.test.ts
|   |   |   |   |   |-- SettingsManager.test.ts
|   |   |   |   |   |-- SmartCompression.test.ts
|   |   |   |   |   `-- VectorMemory.test.ts
|   |   |   |   `-- tsconfig.json
|   |   |   `-- index.ts
|   |   |-- test
|   |   |   |-- integration
|   |   |   |   `-- engine-flow.test.ts
|   |   |   `-- intelligence
|   |   |       |-- fixtures
|   |   |       |   |-- python
|   |   |       |   |   `-- math.py
|   |   |       |   `-- typescript
|   |   |       |       `-- math.ts
|   |   |       |-- architecture-analyzer.test.ts
|   |   |       |-- documentation-generator.test.ts
|   |   |       |-- multi-file-refactor.test.ts
|   |   |       |-- nl2c.test.ts
|   |   |       `-- test-generator.test.ts
|   |   |-- jest.config.cjs
|   |   |-- package.json
|   |   |-- README.md
|   |   |-- tsconfig.json
|   |   |-- tsconfig.test.json
|   |   `-- tsconfig.tsbuildinfo
|   |-- data-layer
|   |   |-- src
|   |   |   `-- index.ts
|   |   |-- package.json
|   |   |-- README.md
|   |   |-- tsconfig.json
|   |   `-- tsconfig.tsbuildinfo
|   |-- languages
|   |   |-- ansible
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- assembly
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- bash
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- c
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- clojure
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- coffeescript
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- common
|   |   |   |-- src
|   |   |   |   |-- all-languages.ts
|   |   |   |   |-- BaseCodeTemplates.d.ts
|   |   |   |   |-- BaseCodeTemplates.js
|   |   |   |   |-- BaseCodeTemplates.ts
|   |   |   |   |-- BaseLanguageAnalyzer.d.ts
|   |   |   |   |-- BaseLanguageAnalyzer.js
|   |   |   |   |-- BaseLanguageAnalyzer.ts
|   |   |   |   |-- BaseLanguageServer.d.ts
|   |   |   |   |-- BaseLanguageServer.js
|   |   |   |   |-- BaseLanguageServer.ts
|   |   |   |   |-- BasePromptEngineering.d.ts
|   |   |   |   |-- BasePromptEngineering.js
|   |   |   |   |-- BasePromptEngineering.ts
|   |   |   |   |-- index.d.ts
|   |   |   |   |-- index.js
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageRegistry.d.ts
|   |   |   |   |-- LanguageRegistry.js
|   |   |   |   |-- LanguageRegistry.ts
|   |   |   |   |-- LspClient.d.ts
|   |   |   |   |-- LspClient.js
|   |   |   |   |-- LspClient.ts
|   |   |   |   |-- types.d.ts
|   |   |   |   |-- types.js
|   |   |   |   `-- types.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   |-- tsconfig.json
|   |   |   `-- tsconfig.tsbuildinfo
|   |   |-- cpp
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- boost
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   |-- embedded
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- modern-cpp
|   |   |   |   |   |   |-- concepts.ts
|   |   |   |   |   |   |-- coroutines.ts
|   |   |   |   |   |   |-- index.ts
|   |   |   |   |   |   `-- ranges.ts
|   |   |   |   |   |-- qt
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       |-- collections.ts
|   |   |   |   |       |-- concurrency.ts
|   |   |   |   |       |-- containers.ts
|   |   |   |   |       |-- index.ts
|   |   |   |   |       `-- smart-pointers.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- crystal
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- csharp
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- css
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- dart
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- dockerfile
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- elixir
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- erlang
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- fortran
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- fsharp
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- go
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- cli
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   |-- gin
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- gorilla
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       |-- collections.ts
|   |   |   |   |       `-- index.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- graphql
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- groovy
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- haskell
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- html
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- java
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- android
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   |-- jpa
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- spring
|   |   |   |   |   |   |-- controllers.ts
|   |   |   |   |   |   |-- index.ts
|   |   |   |   |   |   |-- repositories.ts
|   |   |   |   |   |   `-- services.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       |-- collections.ts
|   |   |   |   |       |-- index.ts
|   |   |   |   |       `-- io.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- javascript
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- json
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- julia
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- kotlin
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- lua
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- markdown
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- matlab
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- nim
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- objective-c
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- ocaml
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- perl
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- php
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- powershell
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- python
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   |-- django
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- fastapi
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- pytorch
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   |-- tsconfig.json
|   |   |   `-- tsconfig.tsbuildinfo
|   |   |-- r
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- ruby
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- rust
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- axum
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- cli
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- scala
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- solidity
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- sql
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- src
|   |   |   |-- test
|   |   |   |   `-- unit
|   |   |   |       |-- .gitkeep
|   |   |   |       |-- CodeTemplates.test.ts
|   |   |   |       |-- LanguageRegistry.test.ts
|   |   |   |       `-- PromptEngineering.test.ts
|   |   |   `-- index.ts
|   |   |-- swift
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- terraform
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- typescript
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   |-- nestjs
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- nextjs
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   |-- react
|   |   |   |   |   |   `-- index.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   |-- tsconfig.json
|   |   |   `-- tsconfig.tsbuildinfo
|   |   |-- vbnet
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- xml
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- yaml
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- zig
|   |   |   |-- src
|   |   |   |   |-- analysis
|   |   |   |   |   |-- ast-patterns.ts
|   |   |   |   |   `-- type-inference.ts
|   |   |   |   |-- implementation
|   |   |   |   |   |-- ecosystem.ts
|   |   |   |   |   |-- idioms.ts
|   |   |   |   |   `-- runtime.ts
|   |   |   |   |-- templates
|   |   |   |   |   |-- concurrency
|   |   |   |   |   |   `-- async.ts
|   |   |   |   |   `-- stdlib
|   |   |   |   |       `-- collections.ts
|   |   |   |   |-- CodeTemplates.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- LanguageAnalyzer.ts
|   |   |   |   |-- LanguageServer.ts
|   |   |   |   `-- PromptEngineering.ts
|   |   |   |-- package.json
|   |   |   |-- README.md
|   |   |   `-- tsconfig.json
|   |   |-- jest.config.cjs
|   |   |-- package.json
|   |   |-- README.md
|   |   |-- tsconfig.json
|   |   `-- tsconfig.tsbuildinfo
|   |-- polyglot-knowledge
|   |   |-- src
|   |   |   |-- analysis
|   |   |   |   `-- pattern-detector.ts
|   |   |   |-- concepts
|   |   |   |   |-- concurrency
|   |   |   |   |   |-- implementations.ts
|   |   |   |   |   `-- patterns.ts
|   |   |   |   |-- control-flow
|   |   |   |   |   |-- async-patterns.ts
|   |   |   |   |   |-- error-handling.ts
|   |   |   |   |   `-- pattern-matching.ts
|   |   |   |   |-- data-structures
|   |   |   |   |   |-- collections.ts
|   |   |   |   |   |-- iterators.ts
|   |   |   |   |   `-- memory-layout.ts
|   |   |   |   |-- paradigms
|   |   |   |   |   |-- closures.ts
|   |   |   |   |   |-- functional.ts
|   |   |   |   |   |-- generics.ts
|   |   |   |   |   |-- oop.ts
|   |   |   |   |   `-- procedural.ts
|   |   |   |   |-- core-concepts.ts
|   |   |   |   `-- coverage-matrix.ts
|   |   |   |-- engine
|   |   |   |   |-- multi-file
|   |   |   |   |   |-- BatchTranslator.ts
|   |   |   |   |   |-- ImportModuleMapper.ts
|   |   |   |   |   |-- index.ts
|   |   |   |   |   |-- ProjectAnalyzer.ts
|   |   |   |   |   |-- TranslationSafety.ts
|   |   |   |   |   `-- TypeRegistry.ts
|   |   |   |   `-- translation-engine.ts
|   |   |   |-- git
|   |   |   |   |-- DiffGenerator.ts
|   |   |   |   |-- GitRunner.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- TranslationBranch.ts
|   |   |   |   |-- TranslationCommit.ts
|   |   |   |   |-- TranslationGit.ts
|   |   |   |   `-- TranslationNotes.ts
|   |   |   |-- mappings
|   |   |   |   |-- ansible
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- assembly
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- bash
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- c
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- clojure
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- coffeescript
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- cpp
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- crystal
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- csharp
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- css
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- dart
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- dockerfile
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- elixir
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- erlang
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- fortran
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- fsharp
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- go
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- graphql
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- groovy
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- haskell
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- html
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- java
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- javascript
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- json
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- julia
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- kotlin
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- lua
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- markdown
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- matlab
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- nim
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- objective-c
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- ocaml
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- perl
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- php
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- powershell
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- python
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- r
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- ruby
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- rust
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- scala
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- solidity
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- sql
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- swift
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- terraform
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- typescript
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   `-- to-rust.ts
|   |   |   |   |-- vbnet
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- xml
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   |-- yaml
|   |   |   |   |   |-- from-cpp.ts
|   |   |   |   |   |-- from-go.ts
|   |   |   |   |   |-- from-java.ts
|   |   |   |   |   |-- from-python.ts
|   |   |   |   |   |-- from-rust.ts
|   |   |   |   |   |-- from-typescript.ts
|   |   |   |   |   |-- to-cpp.ts
|   |   |   |   |   |-- to-go.ts
|   |   |   |   |   |-- to-java.ts
|   |   |   |   |   |-- to-python.ts
|   |   |   |   |   |-- to-rust.ts
|   |   |   |   |   `-- to-typescript.ts
|   |   |   |   `-- zig
|   |   |   |       |-- from-cpp.ts
|   |   |   |       |-- from-go.ts
|   |   |   |       |-- from-java.ts
|   |   |   |       |-- from-python.ts
|   |   |   |       |-- from-rust.ts
|   |   |   |       |-- from-typescript.ts
|   |   |   |       |-- to-cpp.ts
|   |   |   |       |-- to-go.ts
|   |   |   |       |-- to-java.ts
|   |   |   |       |-- to-python.ts
|   |   |   |       |-- to-rust.ts
|   |   |   |       `-- to-typescript.ts
|   |   |   |-- safety
|   |   |   |   `-- TranslationSafety.ts
|   |   |   |-- templates
|   |   |   |   |-- algorithms
|   |   |   |   |   |-- graph-traversal.ts
|   |   |   |   |   `-- sorting.ts
|   |   |   |   |-- api-design
|   |   |   |   |   |-- graphql-resolver.ts
|   |   |   |   |   `-- rest-endpoint.ts
|   |   |   |   `-- design-patterns
|   |   |   |       |-- factory.ts
|   |   |   |       |-- observer.ts
|   |   |   |       |-- singleton.ts
|   |   |   |       `-- strategy.ts
|   |   |   |-- validators
|   |   |   |   |-- behavior-preservation.ts
|   |   |   |   |-- behavioral-tests.ts
|   |   |   |   |-- behavioral-validator.ts
|   |   |   |   |-- performance-comparison.ts
|   |   |   |   |-- performance-validator.ts
|   |   |   |   |-- scale-validation.ts
|   |   |   |   |-- syntax-validator.ts
|   |   |   |   `-- type-equivalence.ts
|   |   |   |-- implementations.ts
|   |   |   |-- index.ts
|   |   |   |-- language-ids.ts
|   |   |   `-- types.ts
|   |   |-- test
|   |   |   `-- integration
|   |   |       `-- translation-flow.test.ts
|   |   |-- jest.config.cjs
|   |   |-- package.json
|   |   |-- tsconfig.json
|   |   |-- tsconfig.test.json
|   |   `-- tsconfig.tsbuildinfo
|   |-- ui-system
|   |   |-- src
|   |   |   `-- index.ts
|   |   |-- package.json
|   |   |-- README.md
|   |   |-- tsconfig.json
|   |   `-- tsconfig.tsbuildinfo
|   `-- README.md
|-- tools
|   |-- build-config
|   |   |-- esbuild.electron.cjs
|   |   |-- esbuild.vscode.cjs
|   |   |-- eslint.cjs
|   |   |-- inline-webview.cjs
|   |   |-- optimize-assets.cjs
|   |   |-- package.json
|   |   |-- prettier.cjs
|   |   |-- README.md
|   |   `-- tsconfig.json
|   |-- scripts
|   |   |-- file-tree.cjs
|   |   |-- generate-language.cjs
|   |   `-- generate-polyglot-assets.cjs
|   `-- README.md
|-- .dockerignore
|-- .eslintrc.cjs
|-- .gitignore
|-- .lintstagedrc.cjs
|-- .npmrc
|-- .nvmrc
|-- .prettierrc.cjs
|-- ARCHITECTURE_DECISIONS.md
|-- CHANGELOG.md
|-- CONTRIBUTING.md
|-- docker-compose.yml
|-- Dockerfile
|-- electron-builder.yml
|-- INCIDENT_RESPONSE.md
|-- LICENSE
|-- ONBOARDING.md
|-- package-lock.json
|-- package.json
|-- PRIVACY.md
|-- PROJECT_GUIDELINES.md
|-- README.md
|-- RELEASE.md
|-- ROADMAP.md
|-- SECURITY.md
|-- TERMS.md
|-- tsconfig.base.json
|-- tsconfig.json
`-- turbo.json
````
