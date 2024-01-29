const { spec } = require('pactum');
const reqresUrl = process.env.Reqres_ENV;

describe('DELETE API tests using PactumJS', () => {

    it.only('should successfully pass the test for DELETE API', async () => {
        await spec()
            .delete(`${reqresUrl}api/users/2`)
            .expectStatus(204);
    });
});