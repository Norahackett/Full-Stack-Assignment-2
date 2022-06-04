import { assert } from "chai";

import { assertSubset } from "../test-utils.js";
import { reviewService } from "./review-service.js";
import { maggie, maggieCredentials, testUsers } from "../fixtures.js";
import { db } from "../../src/models/db.js";
//const user= require ("../../src/api/users-api")
const users = new Array(testUsers.length);


suite("User API tests", () => {
  setup(async () => {
    reviewService.clearAuth();
    await reviewService.createUser(maggie);
    await reviewService.authenticate(maggieCredentials);
    await reviewService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await reviewService.createUser(testUsers[i]);
    }
    await reviewService.createUser(maggie);
    await reviewService.authenticate(maggieCredentials);

  });
  teardown(async () => {});

  test("create a user", async () => {
    const newUser = await reviewService.createUser(maggie);
    assertSubset(maggie, newUser);
    assert.isDefined(newUser._id);

  });

  test("delete all user", async () => {
    let returnedUsers = await reviewService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await reviewService.deleteAllUsers();
    await reviewService.createUser(maggie);
    await reviewService.authenticate(maggieCredentials);
    returnedUsers = await reviewService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user", async () => {
    const returnedUser = await reviewService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await reviewService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 503);
    }
  });

  test("get a user - deleted user", async () => {
    await reviewService.deleteAllUsers();
    await reviewService.createUser(maggie);
    await reviewService.authenticate(maggieCredentials);
    try {
      const returnedUser = await reviewService.getUser(users[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});
