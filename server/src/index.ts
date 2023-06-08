import { config } from 'dotenv'
config()

import express, {Request, Response} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Event from './models/Event'
import { getEventsController } from './controllers/getEventsController'
import { createEventController } from './controllers/createEventController'
import { deleteEventController } from './controllers/deleteEventController'
import { createCardForEventController } from './controllers/createCardforEventController'
import { getEventController } from './controllers/getEventController'
import { deleteCardOfEventController } from './controllers/deleteCardOfEventController'


const app = express();
const PORT = 8000

app.use(cors({
    origin: "*"
})) // this will allow anything to access the api, * means all 
app.use(express.json()) // .use express middleware function, we telling express to use it

app.get('/events', getEventsController)
app.post('/events', createEventController)
app.delete('/events/:eventId', deleteEventController)
app.get('/events/:eventId', getEventController)
app.post('/events/:eventId/cards', createCardForEventController)
app.delete('/events/:eventId/cards/:index', deleteCardOfEventController)

mongoose
.connect(process.env.MONGO_URL!)
.then(() => {
    console.log(`listening on port ${PORT}`)
    app.listen(PORT)
})

