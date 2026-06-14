import { Effect } from "effect"
import { PluginV2 } from "../../plugin"
import { ProviderV2 } from "../../provider"

export const SuperLLMPlugin = PluginV2.define({
  id: PluginV2.ID.make("superllm"),
  effect: Effect.gen(function* () {
    return {
      "catalog.transform": Effect.fn(function* (evt) {
        if (evt.package !== "@ai-sdk/openai-compatible") return
        if (evt.provider !== ProviderV2.ID.make("superllm")) return
        if (evt.model === "gpt-5-chat-latest" || evt.model === "openai/gpt-5-chat") return
      }),
      "aisdk.sdk": Effect.fn(function* (evt) {
        if (evt.package !== "@ai-sdk/openai-compatible") return
        if (evt.provider !== ProviderV2.ID.make("superllm")) return
        const mod = yield* Effect.promise(() => import("@ai-sdk/openai-compatible"))
        evt.sdk = mod.createOpenAICompatible(evt.options)
      }),
      "aisdk.language": Effect.fn(function* (evt) {
        if (evt.model.providerID !== ProviderV2.ID.make("superllm")) return
        evt.language = evt.sdk.chat(evt.model.api.id)
      }),
    }
  }),
})
