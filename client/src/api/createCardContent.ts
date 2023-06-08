import { API_URL } from "./config"
import { TEvent } from "./getEvents"

export async function createCardContent (eventId: string, text: string): Promise<TEvent> {
    const res = await fetch(`${API_URL}/events/${eventId}/cards`, {
        method: 'POST',
        body: JSON.stringify({
          text,
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
    return res.json()
}