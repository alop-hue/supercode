// SUPERCODE Agent Chat Tree
// Enables branching conversations and tree-based navigation

export interface ChatBranch {
  id: string
  parentId: string | null
  messageIds: string[]
  createdAt: number
  label?: string
}

export interface ChatTreeNode {
  branch: ChatBranch
  children: ChatTreeNode[]
  depth: number
}

export const ChatTree = {
  createBranch: (parentId: string | null = null, label?: string): ChatBranch => ({
    id: crypto.randomUUID(),
    parentId,
    messageIds: [],
    createdAt: Date.now(),
    label,
  }),

  buildTree: (branches: ChatBranch[]): ChatTreeNode[] => {
    const roots = branches.filter(b => b.parentId === null)
    const build = (parent: ChatBranch, depth: number): ChatTreeNode => ({
      branch: parent,
      children: branches
        .filter(b => b.parentId === parent.id)
        .map(child => build(child, depth + 1)),
      depth,
    })
    return roots.map(root => build(root, 0))
  },

  renderTreeNode: (node: ChatTreeNode, prefix = ""): string[] => {
    const lines: string[] = []
    const isLast = true
    const connector = isLast ? "└── " : "├── "
    lines.push(`${prefix}${connector}${node.branch.label ?? node.branch.id.slice(0, 8)} (${node.branch.messageIds.length} msgs)`)
    const childPrefix = prefix + (isLast ? "    " : "│   ")
    for (const child of node.children) {
      lines.push(...ChatTree.renderTreeNode(child, childPrefix))
    }
    return lines
  },

  fork: (branches: ChatBranch[], fromBranchId: string, label?: string): ChatBranch[] => {
    const source = branches.find(b => b.id === fromBranchId)
    if (!source) return branches
    const fork = ChatTree.createBranch(fromBranchId, label ?? `fork from ${fromBranchId.slice(0, 8)}`)
    return [...branches, fork]
  },
}
