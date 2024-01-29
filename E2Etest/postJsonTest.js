const { spec } = require('pactum');
const reqresUrl = process.env.Reqres_ENV;
const user1 = require ('../test-data/user-data.json');

describe('POST API tests using PactumJS', () => {

    it('should successfully pass the test for post API when test data from JSON file is used', async () => {
        await spec()
           .post(`${reqresUrl}api/users`)
            .withJson(user1)
            .expectStatus(201)
            .expectJsonMatch('name', 'Mike Tyson')
            .expectJsonMatch('job', 'Boxer')
            .inspect()
    });
});