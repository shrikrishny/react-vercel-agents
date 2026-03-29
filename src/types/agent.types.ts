export interface Tool {
  name: string
  description: string
  parameters: Record<string, unknown>
  execute: (params: Record<string, unknown>) => Promise<unknown>
}

export interface AgentConfig {
  name: string
  description: string
  model: string
  tools: Tool[]
  systemPrompt?: string
}

export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

export interface AgentResponse {
  message: string
  toolCalls?: Array<{
    toolName: string
    params: Record<string, unknown>
    result: unknown
  }>
}