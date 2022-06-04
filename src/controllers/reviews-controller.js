import { db } from "../models/db.js";

export const reviewsController = {
  index: {
    handler: async function (request, h) {
      const trails = await db.trailStore.getAllTrails();
      return h.view("Review", { title: "Make a Review", trails: trails });
    },
  },
  report: {
    handler: async function (request, h) {
      const reviews = await db.reviewStore.getAllReviews();
      return h.view("Report", {
        title: "Reviews to Date",
        reviews: reviews,

      });
    },
  },
  review: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawTrail = request.payload.trail.split(",");
        const trail = await db.trailStore.findByName(rawTrail[0], rawTrail[1]);
        await db.reviewStore.review(trail._id, request.payload.rating, request.payload.lat, request.payload.lat, loggedInUser._id, request.payload.review,);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
