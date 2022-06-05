import { userApi } from "./api/users-api.js";
import { reviewsApi } from "./api/reviews-api.js";
import { traillistApi } from "./api/traillist-api.js";
import { trailApi } from "./api/trail-api.js";
import { eventApi } from "./api/event-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/reviews", config: reviewsApi.findAll },
  { method: "GET", path: "/api/trails/{id}/reviews", config: reviewsApi.findByTrail },
  { method: "POST", path: "/api/trails/{id}/reviews", config: reviewsApi.makeReview },
  { method: "DELETE", path: "/api/reviews", config: reviewsApi.deleteAll },


  { method: "POST", path: "/api/traillists", config: traillistApi.create },
  { method: "DELETE", path: "/api/traillists", config: traillistApi.deleteAll },
  { method: "GET", path: "/api/traillists", config: traillistApi.find },
  { method: "GET", path: "/api/traillists/{id}", config: traillistApi.findOne },
  { method: "DELETE", path: "/api/traillists/{id}", config: traillistApi.deleteOne },

  { method: "POST", path: "/api/events", config: eventApi.addEvent },
  { method: "DELETE", path: "/api/events", config: eventApi.deleteAll },
  { method: "GET", path: "/api/events", config: eventApi.find},
  { method: "GET", path: "/api/events/{id}", config: eventApi.findOne },
  { method: "DELETE", path: "/api/events/{id}", config: eventApi.deleteEvent },



  { method: "GET", path: "/api/trails", config: trailApi.find },
  { method: "GET", path: "/api/trails/{id}", config: trailApi.findOne },
  { method: "POST", path: "/api/trails", config: trailApi.create },
  { method: "POST", path: "/api/traillists/{id}/trails", config: trailApi.create },
  { method: "DELETE", path: "/api/trails", config: trailApi.deleteAll },
  { method: "DELETE", path: "/api/trails/{id}", config: trailApi.deleteOne },
];
