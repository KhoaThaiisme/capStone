import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createEvent } from '../../api/createEvent'
import deleteEvent from '../../api/deleteEvent'
import { getEvents, TEvent} from '../../api/getEvents'
import './dashboard.css'


function DashBoard() {
  const [events, setEvents] = useState<TEvent[]>([])
  const [title, setTitle] = useState('')

  async function handleCreateEvent(e: React.FormEvent) {
    e.preventDefault()
    const res = await createEvent(title)
      setEvents([...events, res])
      setTitle("")
      // console.log(data)
  }

  useEffect(() => {
      async function fetchEvents () {
        const newEvents = await getEvents()
        setEvents(newEvents)
    }
    fetchEvents()
  }, [])
  
  async function handleDeleteEvent (eventId: string) {
    await deleteEvent(eventId)
    setEvents(events.filter(event => event._id !== eventId))
  }

  return (
  <div className='App'>
    <div className='event'>
      {
        events.map((e) => (
          <li key={e._id}>
            <button onClick={() => handleDeleteEvent(e._id)}>X</button>
            <Link to={`events/${e._id}`}>{e.title}</Link>
          </li>
        ))
      }
    </div>

    <form onSubmit={handleCreateEvent}>
      <label htmlFor='event-title'>Event</label>
      <input 
      type="text" 
      id='event-title'
      value={title}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
        {
          setTitle(e.target.value)
        }
      }
      />
      <button>Create Event</button>
    </form>
  </div>
  )
}

export default DashBoard
