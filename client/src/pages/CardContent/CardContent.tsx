import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createCardContent } from '../../api/createCardContent'
import { getEvent } from '../../api/getEvent'
import { TEvent} from '../../api/getEvents'
import './cardcontent.css'

const CardContent = () => {
    const [event, setEvent] = useState<TEvent | undefined>()
    const [text, setText] = useState('')
    const [textArray, setTextArray] = useState<string[]>([])
  
    const { eventId } = useParams()

    async function handleCreateContent(e: React.FormEvent) {
      e.preventDefault()
      const {cards: serverCards} = await createCardContent(eventId, text)
        setTextArray(serverCards)
        setText("")
        // console.log(data)
    }
  
    useEffect(() => {
        async function fetchEvent () {
            if (!eventId) return;
          const newEvent = await getEvent(eventId)
          setEvent(newEvent)
          setTextArray(newEvent.cards)
      }
      fetchEvent()
    }, [eventId])
    
    // async function handleDeleteEvent (eventId: string) {
    //   await deleteEvent(eventId)
    //   setEvents(events.filter(event => event._id !== eventId))
    // }
  
    return (
    <div className='App'>
      <div className='event'>
        {
          textArray.map((card) => (
            <li key={card}>
              {/* <button onClick={() => handleDeleteEvent(e._id)}>X</button> */}
              {card}
            </li>
          ))
        }
      </div>
  
      <form onSubmit={handleCreateContent}>
        <label htmlFor='card-text'>Card Text</label>
        <input 
        type="text" 
        id='card-text'
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
          {
            setText(e.target.value)
          }
        }
        />
        <button>Create Text</button>
      </form>
    </div>
    )
}

export default CardContent