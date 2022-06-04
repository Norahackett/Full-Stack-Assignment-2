import { Event } from "./event.js";


export const eventMongoStore = {
    async getAllEvents() {
        const events = await Event.find().lean();
        return events;
    },

    async getEventById(id) {
        if (id) {
            const event = await Event.findOne({_id: id }).lean();
            return event;

        }
        return null;

    },

    async addEvent(event) {
        const newEvent = new Event(event);
        const eventObj = await newEvent.save();
        return this.getEventById(eventObj._id);
    },


    async deleteEventById(id) {
        try {
            await Event.deleteOne({ _id: id });
        } catch (error) {
            console.log("bad id");
        }
    },

    async deleteAllEvents() {
        await Event.deleteMany({});
    },

};