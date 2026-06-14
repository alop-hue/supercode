// SUPERCODE Web Search Enhancements
// Adds Google Custom Search, Tavily, and other providers

export const WebSearchProviders = {
  tavily: {
    name: "Tavily",
    envVar: "TAVILY_API_KEY",
    baseURL: "https://api.tavily.com/search",
  },
  google: {
    name: "Google Custom Search",
    envVar: "GOOGLE_API_KEY",
    cxVar: "GOOGLE_CX",
    baseURL: "https://www.googleapis.com/customsearch/v1",
  },
  opencode: {
    name: "SUPERCODE Search",
    envVar: "SUPERCODE_SEARCH_API_KEY",
  },
} as const

export type WebSearchProviderName = keyof typeof WebSearchProviders
