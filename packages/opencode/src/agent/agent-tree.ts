// SUPERCODE Agent Tree - Agent with branching conversation support
// Extends the agent system with tree-based conversation management

import { ChatTree, type ChatBranch, type ChatTreeNode } from "../session/chat-tree"

export const AGENT_TREE_SYSTEM_PROMPT = `You are operating in TREE mode.
You can fork the conversation at any point to explore alternative approaches.
When you encounter a decision point, suggest branching to explore different solutions.`

export const AgentTree = {
  systemPrompt: AGENT_TREE_SYSTEM_PROMPT,

  suggestBranches: (options: string[]): string => {
    return options
      .map((opt, i) => `  ${i + 1}. ${opt}`)
      .join("\n")
  },
}
