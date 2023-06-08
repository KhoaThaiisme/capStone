import { API_URL } from "./config"

const deleteEvent = async (eventId: string) => {
    await fetch(`${API_URL}/events/${eventId}`, {
        method: 'DELETE',
      })
}

export default deleteEvent