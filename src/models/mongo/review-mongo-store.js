import { Review } from "./review.js";

export const reviewMongoStore = {
  async getAllReviews() {
    const reviews = await Review.find().populate("reviewer").populate("trail").lean();
    return reviews;
  },

  async getReviewsByTrail(id) {
    const reviews = await Review.find({ trail: id });
    return reviews;
  },

  async review(trail, rating, lat, lng, reviewer, review) {
    const newReview = new Review({
      trail: trail._id,
      rating,
      lat,
      lng,
      reviewer: reviewer._id,
      review,
    });
    await newReview.save();
    return newReview;
  },

  async deleteAll() {
    await Review.deleteMany({});
  },
};
