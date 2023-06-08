import { API_URL } from "./config"
import { TEvent } from "./getEvents"

const deleteCardContent = async (eventId: string, index: number): Promise<TEvent> => {
    const res = await fetch(`${API_URL}/events/${eventId}/cards/${index}`, {
        method: 'DELETE',
      })
    return res.json()
}

export default deleteCardContent