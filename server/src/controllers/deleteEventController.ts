import { Request, Response } from 'express'
import Event from '../models/Event'

export async function deleteEventController (req: Request, res: Response) {
    // TODO: 
    // 1. get the event id from the url
    // 2. delete the deck from mongo
    // 3. return the deleted event to the user whoe made the request
    const eventId = req.params.eventId
    const event = await Event.findByIdAndDelete(eventId);
    res.json(event)
}