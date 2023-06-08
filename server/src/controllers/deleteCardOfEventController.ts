import { Request, Response } from 'express'
import Event from '../models/Event'

export async function deleteCardOfEventController (req: Request, res: Response) {
    const eventId = req.params.eventId
    const index = req.params.index
    const event = await Event.findById(eventId);
    if (!event) return res.status(400).send("no deck of this id exists")
    event.cards.splice(parseInt(index), 1)
    await event.save()
    res.json(event)
}