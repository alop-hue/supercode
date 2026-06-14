// SUPERCODE Slash Commands - Custom reusable command shortcuts
// Allows users to define custom /commands in their supercode.json config

import { Effect } from "effect"

export interface SlashCommand {
  name: string
  description: string
  prompt: string
}

export const loadSlashCommands = Effect.fn("SlashCommands.load")(function* (config: { commands?: Record<string, { description?: string; prompt?: string }> }) {
  const commands: SlashCommand[] = []
  if (!config.commands) return commands

  for (const [name, cmd] of Object.entries(config.commands)) {
    if (cmd.prompt) {
      commands.push({
        name,
        description: cmd.description ?? name,
        prompt: cmd.prompt,
      })
    }
  }
  return commands
})
