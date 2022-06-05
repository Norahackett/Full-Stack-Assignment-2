import { assert } from "chai";
import { reviewService } from "./review-service.js";
import { maggie, testTrails, testReviews } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Review API tests", () => {
  setup(async () => {
    await reviewService.createUser(maggie);
    await reviewService.authenticate(maggie);
    await reviewService.deleteAllUsers();
    await reviewService.createUser(maggie);
    await reviewService.authenticate(maggie);
  });
  teardown(async () => {
    await reviewService.deleteAllUsers();
  });

  test("create a review", async () => {
    const returnedTrail = await reviewService.createTrailreview(testTrails[0]);
    await reviewService.makeReview(returnedTrail._id, testReviews[0]);
    const returnedReviews = await reviewService.getReviews(returnedTrail._id);
    console.log(returnedReviews);
    assert.equal(returnedReviews.length, 1);
    assertSubset(returnedReviews[0], testReviews[0]);
  });
});
