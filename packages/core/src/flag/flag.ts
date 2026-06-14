import { Config } from "effect"

export function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const copy = process.env["SUPERCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
const fff = process.env["SUPERCODE_DISABLE_FFF"]

function enabledByExperimental(key: string) {
  return process.env[key] === undefined ? truthy("SUPERCODE_EXPERIMENTAL") : truthy(key)
}

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  SUPERCODE_AUTO_HEAP_SNAPSHOT: truthy("SUPERCODE_AUTO_HEAP_SNAPSHOT"),
  SUPERCODE_GIT_BASH_PATH: process.env["SUPERCODE_GIT_BASH_PATH"],
  SUPERCODE_CONFIG: process.env["SUPERCODE_CONFIG"],
  SUPERCODE_CONFIG_CONTENT: process.env["SUPERCODE_CONFIG_CONTENT"],
  SUPERCODE_DISABLE_AUTOUPDATE: truthy("SUPERCODE_DISABLE_AUTOUPDATE"),
  SUPERCODE_ALWAYS_NOTIFY_UPDATE: truthy("SUPERCODE_ALWAYS_NOTIFY_UPDATE"),
  SUPERCODE_DISABLE_PRUNE: truthy("SUPERCODE_DISABLE_PRUNE"),
  SUPERCODE_DISABLE_TERMINAL_TITLE: truthy("SUPERCODE_DISABLE_TERMINAL_TITLE"),
  SUPERCODE_SHOW_TTFD: truthy("SUPERCODE_SHOW_TTFD"),
  SUPERCODE_DISABLE_AUTOCOMPACT: truthy("SUPERCODE_DISABLE_AUTOCOMPACT"),
  SUPERCODE_DISABLE_MODELS_FETCH: truthy("SUPERCODE_DISABLE_MODELS_FETCH"),
  SUPERCODE_DISABLE_MOUSE: truthy("SUPERCODE_DISABLE_MOUSE"),
  SUPERCODE_FAKE_VCS: process.env["SUPERCODE_FAKE_VCS"],
  SUPERCODE_SERVER_PASSWORD: process.env["SUPERCODE_SERVER_PASSWORD"],
  SUPERCODE_SERVER_USERNAME: process.env["SUPERCODE_SERVER_USERNAME"],
  SUPERCODE_DISABLE_FFF: fff === undefined ? process.platform === "win32" : truthy("SUPERCODE_DISABLE_FFF"),

  // Experimental
  SUPERCODE_EXPERIMENTAL_FILEWATCHER: Config.boolean("SUPERCODE_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  SUPERCODE_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("SUPERCODE_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  SUPERCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("SUPERCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  SUPERCODE_MODELS_URL: process.env["SUPERCODE_MODELS_URL"],
  SUPERCODE_MODELS_PATH: process.env["SUPERCODE_MODELS_PATH"],
  SUPERCODE_DB: process.env["SUPERCODE_DB"],

  SUPERCODE_WORKSPACE_ID: process.env["SUPERCODE_WORKSPACE_ID"],
  SUPERCODE_EXPERIMENTAL_WORKSPACES: enabledByExperimental("SUPERCODE_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get SUPERCODE_DISABLE_PROJECT_CONFIG() {
    return truthy("SUPERCODE_DISABLE_PROJECT_CONFIG")
  },
  get SUPERCODE_EXPERIMENTAL_REFERENCES() {
    return enabledByExperimental("SUPERCODE_EXPERIMENTAL_REFERENCES")
  },
  get SUPERCODE_TUI_CONFIG() {
    return process.env["SUPERCODE_TUI_CONFIG"]
  },
  get SUPERCODE_CONFIG_DIR() {
    return process.env["SUPERCODE_CONFIG_DIR"]
  },
  get SUPERCODE_PURE() {
    return truthy("SUPERCODE_PURE")
  },
  get SUPERCODE_PERMISSION() {
    return process.env["SUPERCODE_PERMISSION"]
  },
  get SUPERCODE_PLUGIN_META_FILE() {
    return process.env["SUPERCODE_PLUGIN_META_FILE"]
  },
  get SUPERCODE_CLIENT() {
    return process.env["SUPERCODE_CLIENT"] ?? "cli"
  },
}
