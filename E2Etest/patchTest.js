const { spec } = require('pactum');
const reqresUrl = process.env.Reqres_ENV;
const minorUpdatedUserData = require('../test-data/minor-updated-user-data.json');

describe('PATCH API tests using PactumJS', () => {

    it('should successfully pass the test for PATCH API', async () => {
        await spec()
            .patch(`${reqresUrl}api/users/2`)
            .withJson(minorUpdatedUserData)
            .expectStatus(200)
            .expectJsonMatch('job', 'Boxer')
            .inspect();
    });
});