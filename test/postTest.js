const { spec } = require("pactum");
const reqresUrl = process.env.Reqres_ENV;

describe("Post", () => {
  it("should create request", async () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    const expectedDate = new RegExp(
     `^${currentDate}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$`
    );
    await spec()
      .post(`${reqresUrl}api/users`)
      .withJson({
        data: {
          name: "morpheus",
          job: "leader",
        },
      })
      .expectJsonLike({
        data: {
          name: "morpheus",
          job: "leader",
        },
        createdAt: expectedDate,
      })
      .expectStatus(201);
  });

  it("should register successfully", async () => {
    await spec()
      .post("https://reqres.in/api/register")
      .withJson({
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .expectJsonMatch({
        id: 4,
        token: "QpwL5tke4Pnpja7X4",
      })
      .expectStatus(200);
  });

  it("should not register successfully", async () => {
    await spec()
      .post("https://reqres.in/api/register")
      .withJson({
        email: "sydney@fife",
      })
      .expectStatus(400);
  });

  it("should login successfully", async () => {
    await spec()
      .post(`${reqresUrl}api/login`)
      .withJson({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .expectStatus(200);
  });

  it("should not login successfully", async () => {
    await spec()
      .post("https://reqres.in/api/login")
      .withJson({
        email: "peter@klaven",
      })
      .expectStatus(400);
  });

  it("should register successfully", async () => {
    await spec()
      .post(`${reqresUrl}api/register`)
      .withJson({
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .expectJsonMatch({
        id: 4,
        token: "QpwL5tke4Pnpja7X4",
      })
      .expectStatus(200);
  });

  it("should register unsuccessfully", async () => {
    await spec()
      .post(`${reqresUrl}api/register`)
      .withJson({
        email: "sydney@fife",
      })
      .expectJsonMatch({
        error: "Missing password",
      })
      .expectStatus(400);
  });

  it("should login successfully", async () => {
    await spec()
      .post(`${reqresUrl}api/login`)
      .withJson({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .expectJsonMatch({
        token: "QpwL5tke4Pnpja7X4",
      })
      .expectStatus(200);
  });

  it("should login unsuccessfully", async () => {
    await spec()
      .post(`${reqresUrl}api/login`)
      .withJson({
        email: "peter@klaven",
      })
      .expectJsonMatch({
        error: "Missing password",
      })
      .expectStatus(400);
  });
});
