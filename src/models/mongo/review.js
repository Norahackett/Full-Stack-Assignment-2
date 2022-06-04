import Mongoose from "mongoose";

const { Schema } = Mongoose;

const reviewSchema = new Schema({
  trail: {
    type: Schema.Types.ObjectId,
    ref: "Trail",
  },
  rating:Number,
  lat: String,
  lng: String,
  reviewer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  review: String,
});

export const Review = Mongoose.model("Review", reviewSchema);
