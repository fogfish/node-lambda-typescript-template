type Event = {a: string, b: number}

export function handler(event: Event): Promise<Event> {
  console.log('==> ', event)
  return Promise.resolve(event)
}
