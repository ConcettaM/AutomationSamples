const { spec } = require("pactum");
const reqresUrl = process.env.Reqres_ENV;

describe("GET API tests using PactumJS", () => {
  it("should successfully pass the test for single user GET API", async () => {
    await spec().get(
      `${reqresUrl}api/users/2`
        .expectStatus(200)
        //.inspect()
        .expectJsonMatch({
          data: {
            first_name: "Janet",
            last_name: "Weaver",
          },
        })
    );
  });
});
