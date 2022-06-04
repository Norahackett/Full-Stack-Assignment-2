import { db } from "../models/db.js";



export const eventController = {
    index: {
        handler: async function (request, h) {
            const events = await db.eventStore.getAllEvents();
            const viewData = {
                title: "Event",
                events: events,
            };
            return h.view("Event", viewData);
        },
    },

    addEvent: {
        handler: async function (request, h) {
           // const event = await db.eventStore.getEventById(request.params.id);
            const newEvent = {
                name: request.payload.name,
                details: request.payload.details,
                price: Number(request.payload.price),
                date: request.payload.date,
            };
            await db.eventStore.addEvent(newEvent);
            return h.redirect(`/event`)
        },
    },

    deleteEvent: {
        handler: async function (request, h) {
            const event = await db.eventStore.getEventById(request.params.id);
            console.log(event)
           // if (!event) {
            //    return Boom.notFound("No Event with this id");
           // }
            await db.eventStore.deleteEventById(event._id);
            return h.redirect("/event");
        },
    },
};