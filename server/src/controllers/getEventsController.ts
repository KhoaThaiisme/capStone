import { Request, Response } from 'express'
import Event from '../models/Event'

export async function getEventsController (req: Request, res: Response) {
    // TODO: fetch all events and send back to the user
    // 1. how do we fetch the event from mongo?
    // 2. how do we send back the array to the ui
        const events = await Event.find();
        res.json(events)
}