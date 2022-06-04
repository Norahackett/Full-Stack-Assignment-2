import Mongoose from "mongoose";

const { Schema } = Mongoose;

const eventSchema = new Schema({
    name: String,
    details: String,
    price: String,
    date: String,

});

export const Event = Mongoose.model("Event", eventSchema);