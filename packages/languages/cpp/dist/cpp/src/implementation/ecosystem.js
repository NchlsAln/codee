"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppEcosystem = void 0;
exports.cppEcosystem = {
    buildTools: ["CMake", "Ninja"],
    packageManagers: ["Conan", "vcpkg"],
    testing: ["GoogleTest", "Catch2", "doctest"],
    benchmarking: ["Google Benchmark"],
    linting: ["clang-tidy", "cppcheck"],
    formatting: ["clang-format"],
    buildSystems: ["Make", "Meson", "Bazel"],
    docs: ["Doxygen", "Sphinx + Breathe"],
    ciCd: ["GitHub Actions", "GitLab CI", "Buildkite"],
    deploymentTargets: ["embedded", "desktop", "server", "game"],
    frameworks: ["Boost", "Qt", "gRPC"]
};
