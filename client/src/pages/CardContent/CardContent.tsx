import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createCardContent } from '../../api/createCardContent'
import deleteCardContent from '../../api/deleteCardContent'
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
    
    async function handleDeleteCard (index: number) {
    // if (!eventId) return;
      const newEvent = await deleteCardContent(eventId, index)
      setTextArray(newEvent.cards) //.filter(t => textArray[t] !== index)
    }
  
    return (
    <container>
    <div className='App'>
        <h1>{event?.title}</h1>
      <div className='text'>
        {
          textArray.map((card, index) => (
            <li key={card}>
              <button onClick={() => handleDeleteCard(index)}>X</button>
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
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 1, color : "black"
        }}
        />
        
        <button>Create Text</button>
      </form>
    </div>
    </container>
    )
}

export default CardContent