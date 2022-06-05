import Boom from "@hapi/boom";
import {db} from "../models/db.js";


export const reviewsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const reviews = db.reviewStore.getAllReviews();
      return reviews;
    },

  },
  findByTrail: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const reviews = await db.reviewStore.getReviewsByTrail(request.params.id);
      return reviews;
    },


  },

  makeReview: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const trail = await db.trailStore.findById(request.params.id);
      if (!trail) {
        return Boom.notFound("No Trail with this id");
      }
      const review = await db.reviewStore.review(
          trail,
          request.payload.rating,
          request.payload.lat,
          request.payload.lng,
          request.auth.credentials,
          request.payload.review,
      );
      return review;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.reviewStore.deleteAll();
      return {success: true};
    },
  },
};
