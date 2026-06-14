// SUPERCODE Planning Mode - Forces step-by-step planning before execution
// The LLM writes a plan, user approves/modifies it, then execution begins

import { Effect, Schema } from "effect"

export const Plan = Schema.Struct({
  steps: Schema.Array(
    Schema.Struct({
      description: Schema.String,
      files: Schema.optional(Schema.Array(Schema.String)),
      estimatedComplexity: Schema.optional(Schema.String),
    })
  ),
  summary: Schema.String,
})

export type Plan = Schema.Schema.Type<typeof Plan>

export const PlanMode = {
  isEnabled: (config: { mode?: Record<string, unknown>; agent?: Record<string, { mode?: string }> }) => {
    return config.mode?.plan === true || Object.values(config.agent ?? {}).some(a => a.mode === "plan")
  },
}
