export const rubyEcosystem = {
  fileExtensions: [".rb", ".rake", ".ru"],
  paradigms: ["oop", "functional", "procedural"],
  packageManagers: ["RubyGems", "Bundler"],
  buildTools: ["Rake", "Bundler", "Gem build"],
  testing: ["RSpec", "Minitest"],
  integrationTesting: ["Capybara"],
  linting: ["RuboCop", "StandardRB"],
  formatting: ["RuboCop", "StandardRB"],
  typeChecking: ["Sorbet", "RBS", "Steep"],
  docs: ["YARD"],
  ciCd: ["GitHub Actions", "CircleCI"],
  deploymentTargets: ["containers", "Heroku", "Kubernetes", "serverless"],
  runtimes: ["MRI", "JRuby", "TruffleRuby"],
  frameworks: ["Rails", "Sinatra", "Grape"],
  packageIndex: "RubyGems",
  observability: ["Lograge", "OpenTelemetry"]
};
