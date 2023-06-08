import { API_URL } from "./config"
import { TEvent } from "./getEvents"

export async function getEvent(eventId: string): Promise<TEvent> {
    const res = await fetch(`${API_URL}/events/${eventId}`)
    return res.json()
}
