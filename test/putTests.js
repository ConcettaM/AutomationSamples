const { spec } = require("pactum");
const reqresUrl = process.env.Reqres_ENV

describe("Put", () => {
  it("should update a single user", async () => {
    await spec()
      .put(`${reqresUrl}api/users/2`)
      .withJson({
        name: "morpheus",
        job: "zion resident",
      })
      .expectJsonLike({
          name: "morpheus",
          job: "zion resident",
          updatedAt: /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,
      })
      .expectStatus(200);
  });
});
