import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const EventSchema = new Schema({
    title: String,
    cards: [String]
})

const EventModel = mongoose.model('Event', EventSchema)

export default EventModel;