const { spec } = require("pactum");
const reqresUrl = process.env.Reqres_ENV;
const updatedUserData = require("../test-data/updated-user-data.json");

describe("PUT API tests using PactumJS", () => {
  it("should successfully pass the test for PUT API", async () => {
    await spec()
      .put(`${reqresUrl}api/users/2`)
      .withJson(updatedUserData)
      .expectStatus(200)
      .expectJsonMatch("name", "Floyd Joy Mayweather Jr.")
      .expectJsonMatch("job", "Boxer Two");
  });
});
