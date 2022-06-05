import { accountsController } from "./controllers/accounts-controller.js";
import { reviewsController } from "./controllers/reviews-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { traillistController } from "./controllers/traillist-controller.js";
import { trailController } from "./controllers/trail-controller.js";
import { eventController } from "./controllers/event-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/review", config: reviewsController.index },
  { method: "POST", path: "/review", config: reviewsController.review },
  { method: "GET", path: "/report", config: reviewsController.report },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addtraillist", config: dashboardController.addTraillist },
  { method: "GET", path: "/traillist/{id}", config: traillistController.index },
  { method: "POST", path: "/traillist/{id}/addtrail", config: traillistController.addTrail },

  { method: "GET", path: "/dashboard/deletetraillist/{id}", config: dashboardController.deleteTraillist },
  { method: "GET", path: "/traillist/{id}/deletetrail/{trailid}", config: traillistController.deleteTrail },

  { method: "GET", path: "/trail/{id}/edittrail/{trailid}", config: trailController.index },
  { method: "POST", path: "/trail/{id}/updatetrail/{trailid}", config: trailController.update },

  { method: "GET", path: "/event", config: eventController.index },
  { method: "POST", path: "/event/addevent", config: eventController.addEvent },
  { method: "POST", path: "/event/deleteevent/{id}", config: eventController.deleteEvent },


  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false },
  },
];
