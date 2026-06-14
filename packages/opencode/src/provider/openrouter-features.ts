// OpenRouter-specific enhancements for SUPERCODE
// This adds additional model routing, better error messages, and default configs

import { ProviderV2 } from "@supercode-ai/core/provider"

export const OPENROUTER_FEATURES = {
  // Default headers sent to OpenRouter for SUPERCODE
  defaultHeaders: {
    "HTTP-Referer": "https://supercode.ai/",
    "X-Title": "supercode",
  },

  // Models that work particularly well via OpenRouter
  recommendedModels: [
    "openai/gpt-4o",
    "anthropic/claude-3.5-sonnet",
    "google/gemini-2.0-flash-001",
    "deepseek/deepseek-chat",
    "meta-llama/llama-3.3-70b-instruct",
    "mistral/mistral-large-2411",
    "qwen/qwen-2.5-72b-instruct",
  ],
}
