import express, {Request, Response} from 'express'
import mongoose from 'mongoose'

import Event from './models/Event'


const app = express();
const PORT = 8000

app.use(express.json()) // .use express middleware function, we telling expres to use it

app.post('/events', async (req: Request, res: Response) => {
    console.log(req.body)
    // res.send('this backend is working')
    const newEvent = new Event({
        title: req.body.title
    });
    const createdEvent = await newEvent.save(); // this will get save into the database
    res.json(createdEvent)
})

mongoose
.connect('mongodb+srv://khoa2010:Khoa2010@scheduler.uibflcl.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log(`listening on port ${PORT}`)
    app.listen(PORT)
})