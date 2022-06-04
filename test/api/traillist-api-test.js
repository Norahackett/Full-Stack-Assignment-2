import { assert } from "chai";
import { reviewService } from "./review-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie,maggieCredentials, lenister, testTraillists } from "../fixtures.js";


suite("Traillist API tests", () => {

    let user = null;

    setup(async () => {
        reviewService.clearAuth();
        user = await reviewService.createUser(maggie);
        await reviewService.authenticate(maggieCredentials);
        await reviewService.deleteAllTraillists();
        await reviewService.deleteAllUsers();
        user = await reviewService.createUser(maggie);
        await reviewService.authenticate(maggieCredentials);
        lenister.userid = user._id;
    });

    teardown(async () => {});

    test("create traillist", async () => {
        const returnedTraillist = await reviewService.createTraillist(lenister);
        assert.isNotNull(returnedTraillist);
        assertSubset(lenister, returnedTraillist);
    });

    test("delete a traillist", async () => {
        const traillist = await reviewService.createTraillist(lenister);
        const response = await reviewService.deleteTraillist(traillist._id);
        assert.equal(response.status, 204);
        try {
            const returnedTraillist = await reviewService.getTraillist(traillist.id);
            assert.fail("Should not return a response");
        } catch (error) {
            assert(error.response.data.message === "No Traillist with this id", "Incorrect Response Message");
        }
    });

    test("create multiple traillists", async () => {
        for (let i = 0; i < testTraillists.length; i += 1) {
            testTraillists[i].userid = user._id;
            // eslint-disable-next-line no-await-in-loop
            await reviewService.createTraillist(testTraillists[i]);
        }
        let returnedLists = await reviewService.getAllTraillists();
        assert.equal(returnedLists.length, testTraillists.length);
        await reviewService.deleteAllTraillists();
        returnedLists = await reviewService.getAllTraillists();
        assert.equal(returnedLists.length, 0);
    });

    test("remove non-existant traillist", async () => {
        try {
            const response = await reviewService.deleteTraillist("not an id");
            assert.fail("Should not return a response");
        } catch (error) {
            assert(error.response.data.message === "No Traillist with this id", "Incorrect Response Message");
        }
    });
});