import { Request, Response } from 'express'
import Event from '../models/Event'

export async function createEventController (req: Request, res: Response) {
    const newEvent = new Event({
        title: req.body.title
    });
    const createdEvent = await newEvent.save(); // this will get save into the database
    res.json(createdEvent)
}