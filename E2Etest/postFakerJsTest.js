const { spec } = require("pactum");
const reqresUrl = process.env.Reqres_ENV;
const { faker } = require("@faker-js/faker");

const randomName = faker.person.fullName();
const randomJob = faker.person.jobTitle();

describe("POST API tests using PactumJS", () => {
  it("should successfully pass the test for post API when test data generated using fakerjs", async () => {
    await spec()
      .post(`${reqresUrl}api/users`)
      .withJson({
        name: randomName,
        job: randomJob,
      })
      .expectStatus(201)
      .expectJsonMatch("name", randomName)
      .expectJsonMatch("job", randomJob);
  });
});
