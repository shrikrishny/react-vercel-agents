import { AgentConfig, Message, Tool } from '../types/agent.types'

export class BaseAgent {
  private config: AgentConfig
  private messages: Message[] = []
  private tools: Map<string, Tool> = new Map()

  constructor(config: AgentConfig) {
    this.config = config
    this.registerTools(config.tools)
  }

  private registerTools(tools: Tool[]): void {
    tools.forEach(tool => {
      this.tools.set(tool.name, tool)
    })
  }

  async addMessage(role: 'user' | 'assistant' | 'system', content: string): Promise<void> {
    const message: Message = {
      id: `msg_${Date.now()}_${Math.random()}`,
      role,
      content,
      timestamp: new Date()
    }
    this.messages.push(message)
  }

  getMessages(): Message[] {
    return [...this.messages]
  }

  getConfig(): AgentConfig {
    return this.config
  }

  async executeTool(toolName: string, params: Record<string, unknown>): Promise<unknown> {
    const tool = this.tools.get(toolName)
    if (!tool) {
      throw new Error(`Tool ${toolName} not found`)
    }
    return await tool.execute(params)
  }

  getAvailableTools(): Tool[] {
    return Array.from(this.tools.values())
  }
}