const { spec } = require("pactum");
const reqresUrl = process.env.Reqres_ENV;

describe("GET API tests using PactumJS", () => {
  it("should successfully pass the test for single user GET API using query param", async () => {
    await spec()
      .get(`${reqresUrl}api/users`)
      .withQueryParams({ page: "2" })
      .expectStatus(200)
      .inspect()
      .expectJsonMatch('page', 2)
      .expectJsonMatch('data[0].id', 7)
      .expectJsonMatch('data[0].first_name', 'Michael');
  });
});
