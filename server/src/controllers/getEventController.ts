import { Request, Response } from 'express'
import Event from '../models/Event'

export async function getEventController (req: Request, res: Response) {
        const {eventId} = req.params
        const event = await Event.findById(eventId);
        res.json(event)
}