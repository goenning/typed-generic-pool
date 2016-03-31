interface Factory {
  name?: string
  create: (callback: (err: Error, client: any) => void) => void
  destroy: (client: any) => void
  max?: number
  min?: number
  refreshIdle?: boolean
  idleTimeoutMillis?: number
  reapIntervalMillis?: number
  returnToHead?: boolean
  priorityRange?: number
  validate?: (client: any) => boolean
  validateAsync?: (client: any, callback: (remove: boolean) => void) => void
  log?: boolean | ((log: string, level: string) => void)
}

export class Pool {
  constructor(factory: Factory)

  acquire(callback: (err: Error, client: any) => void, priority?: number): void
  release(client: any): void
  drain(callback: () => void): void
  destroyAllNow(): void
  pooled(callback: (client: any, arg: any, cb: (err: Error, arg: any) => void) => void): void

  getName(): string
  getPoolSize(): number
  availableObjectsCount(): number
  waitingClientsCount(): number
  getMaxPoolSize(): number
  getMinPoolSize(): number
}
