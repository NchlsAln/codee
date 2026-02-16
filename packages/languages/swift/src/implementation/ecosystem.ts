export const swiftEcosystem = {
  fileExtensions: [
    ".swift"
  ],
  paradigms: [
    "oop",
    "functional",
    "procedural"
  ],
  packageManagers: ["SwiftPM", "CocoaPods", "Carthage"],
  buildTools: ["swift", "swiftpm", "xcodebuild"],
  testing: ["XCTest", "Quick", "Nimble"],
  linting: ["SwiftLint"],
  formatting: ["swiftformat"],
  docs: ["DocC", "Jazzy"],
  ciCd: ["GitHub Actions", "Bitrise", "Xcode Cloud"],
  deploymentTargets: ["ios", "macos", "watchos", "tvos", "server"],
  tooling: ["swift", "swiftpm", "xcodebuild"],
  runtimes: ["native"],
  frameworks: ["SwiftUI", "UIKit", "Vapor", "Combine"]
};
