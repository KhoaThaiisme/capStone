import { API_URL } from "./config";

export async function createEvent (title: string) {
    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    return res.json()
}