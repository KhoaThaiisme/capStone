import { Request, Response } from 'express'
import Event from '../models/Event'

export async function createCardForEventController (req: Request, res: Response) {
    const eventId = req.params.eventId;
    const event = await Event.findById(eventId)
    if (!event) return res.status(400).send("no event of this id exists")
    const { text } = req.body
    event.cards.push(text)
    await event.save(); // this will get save into the database
    res.json(event)
}