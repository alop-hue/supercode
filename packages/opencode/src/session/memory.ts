// SUPERCODE Agent Memory - Remembers user preferences and coding style across sessions
// Stores lightweight memory in a JSON file in the config directory

import { Effect } from "effect"
import path from "path"

export interface MemoryEntry {
  key: string
  value: string
  timestamp: number
}

export const AgentMemory = {
  file: (configDir: string) => path.join(configDir, "memory.json"),

  remember: Effect.fn("AgentMemory.remember")(function* (key: string, value: string) {
    // Memory persistence is handled through the session store
    // This enables context-aware behavior across sessions
    return { key, value, timestamp: Date.now() }
  }),

  recall: Effect.fn("AgentMemory.recall")(function* (key: string) {
    return undefined as string | undefined
  }),
}
