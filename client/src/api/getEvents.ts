import { API_URL } from "./config"

export type TEvent = {
    title: string,
    cards: string[],
    _id: string
  }

export async function getEvents(): Promise<TEvent[]> {
    const res = await fetch(`${API_URL}/events`)
    return res.json()
}
