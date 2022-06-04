import { assert } from "chai";
import { reviewService } from "./review-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";



suite("Authentication API tests", async () => {
  setup(async () => {
    reviewService.clearAuth();
    await reviewService.createUser(maggie);
    await reviewService.authenticate(maggie);
    await reviewService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await reviewService.createUser(maggie);
    const response = await reviewService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);

  });

  test("verify Token", async () => {
    const returnedUser = await reviewService.createUser(maggie);
    const response = await reviewService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    reviewService.clearAuth();
    try {
      await reviewService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});
