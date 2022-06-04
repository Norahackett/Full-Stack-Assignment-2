import Boom from "@hapi/boom";
import {db} from "../models/db.js";
//import {IdSpec} from "../models/joi-schemas";
//import {validationError} from "./logger";

export const eventApi = {
    find: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const events = db.eventStore.getAllEvents();
                return events;
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },
    findOne: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request) {
            try {
                const event = await db.eventStore.getEventById(request.params.id);
                if (!event) {
                    return Boom.notFound("No Event with this id");
                }
                return event;
            } catch (err) {
                return Boom.serverUnavailable("No Event with this id");
            }
        },
    },
    addEvent: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const event = request.payload;
                const newEvent = await db.eventStore.addEvent(event)
                //(request.params.id, request.payload);
                if (newEvent) {
                    return h.response(newEvent).code(201);
                }
                return Boom.badImplementation("error deleting Event");
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },

    deleteEvent: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const event = await db.eventStore.getEventById(request.params.id);
                if (!event) {
                    return Boom.notFound("No Event with this id");
                }
                await db.eventStore.deleteEventById(event._id);
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("No Event with this id");
            }
        },
    },
    deleteAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                await db.eventStore.deleteAllEvents();
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },
};
