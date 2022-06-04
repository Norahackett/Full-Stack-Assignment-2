import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { reviewService } from "./review-service.js";
import { maggie, maggieCredentials, lenister, testTraillists, testTrails, munster } from "../fixtures.js";

suite("Trail API tests", () => {
    let user = null;
    let ulsterTraillist = null;

    setup(async () => {
        reviewService.clearAuth();
        user = await reviewService.createUser(maggie);
        await reviewService.authenticate(maggieCredentials);
        await reviewService.deleteAllTraillists();
        await reviewService.deleteAllTrails();
        await reviewService.deleteAllUsers();
        user = await reviewService.createUser(maggie);
        await reviewService.authenticate(maggieCredentials);
        lenister.userid = user._id;
        ulsterTraillist = await reviewService.createTraillist(lenister);
    });

    teardown(async () => {});

    test("create trail", async () => {
        const returnedTrail = await reviewService.createTrail(ulsterTraillist._id, munster);
        assertSubset(munster, returnedTrail);
    });

    test("create Multiple trails", async () => {
        for (let i = 0; i < testTrails.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await reviewService.createTrail(ulsterTraillist._id, testTrails[i]);
        }
        const returnedTrails = await reviewService.getAllTrails();
        assert.equal(returnedTrails.length, testTrails.length);
        for (let i = 0; i < returnedTrails.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const trail = await reviewService.getTrail(returnedTrails[i]._id);
            assertSubset(trail, returnedTrails[i]);
        }
    });

    test("Delete TrailApi", async () => {
        for (let i = 0; i < testTrails.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await reviewService.createTrail(ulsterTraillist._id, testTrails[i]);
        }
        let returnedTrails = await reviewService.getAllTrails();
        assert.equal(returnedTrails.length, testTrails.length);
        for (let i = 0; i < returnedTrails.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const trail = await reviewService.deleteTrail(returnedTrails[i]._id);
        }
        returnedTrails = await reviewService.getAllTrails();
        assert.equal(returnedTrails.length, 0);
    });

    test("denormalised traillist", async () => {
        for (let i = 0; i < testTrails.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await reviewService.createTrail(ulsterTraillist._id, testTrails[i]);
        }
        const returnedTraillist = await reviewService.getTraillist(ulsterTraillist._id);
        assert.equal(returnedTraillist.trails.length, testTrails.length);
        for (let i = 0; i < testTrails.length; i += 1) {
            assertSubset(testTrails[i], returnedTraillist.trails[i]);
        }
    });
});
