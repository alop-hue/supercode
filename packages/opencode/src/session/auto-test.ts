// SUPERCODE Auto-Testing - Automatically run tests after code changes
// Detects project test framework and runs tests, feeding results back to the LLM

import { Effect } from "effect"

export const AutoTestConfig = {
  supportedFrameworks: ["vitest", "jest", "pytest", "go test", "cargo test", "bun test"],

  detectFramework: (files: string[]): string | undefined => {
    if (files.some(f => f.includes("vitest.config") || f.includes("vite.config"))) return "vitest"
    if (files.some(f => f.includes("jest.config"))) return "jest"
    if (files.some(f => f === "pytest.ini" || f === "pyproject.toml")) return "pytest"
    if (files.some(f => f === "Cargo.toml")) return "cargo test"
    if (files.some(f => f === "go.mod")) return "go test"
    return undefined
  },
}
