const { spec } = require("pactum");
const reqresUrl = process.env.Reqres_ENV;

describe("Get", () => {
  it("should get a single user", async () => {
    await spec()
      .get(`${reqresUrl}api/users/2`)
      .expectJsonMatch({
        data: {
          id: 2,
          email: "janet.weaver@reqres.in",
          first_name: "Janet",
          last_name: "Weaver",
          avatar: "https://reqres.in/img/faces/2-image.jpg",
        },
        support: {
          url: "https://reqres.in/#support-heading",
          text: "To keep ReqRes free, contributions towards server costs are appreciated!",
        },
      })
      .expectStatus(200);
  });
  it("single user not found", async () => {
    await spec().get("https://reqres.in/api/users/23").expectStatus(404);
  });
  
  it("should get a single list resource", async () => {
    await spec()
      .get(`${reqresUrl}api/unknown`)
      .expectJsonMatch({
        page: 1,
        per_page: 6,
        total: 12,
        total_pages: 2,
        data: [
          {
            id: 1,
            name: "cerulean",
            year: 2000,
            color: "#98B2D1",
            pantone_value: "15-4020",
          },
          {
            id: 2,
            name: "fuchsia rose",
            year: 2001,
            color: "#C74375",
            pantone_value: "17-2031",
          },
          {
            id: 3,
            name: "true red",
            year: 2002,
            color: "#BF1932",
            pantone_value: "19-1664",
          },
          {
            id: 4,
            name: "aqua sky",
            year: 2003,
            color: "#7BC4C4",
            pantone_value: "14-4811",
          },
          {
            id: 5,
            name: "tigerlily",
            year: 2004,
            color: "#E2583E",
            pantone_value: "17-1456",
          },
          {
            id: 6,
            name: "blue turquoise",
            year: 2005,
            color: "#53B0AE",
            pantone_value: "15-5217",
          },
        ],
        support: {
          url: "https://reqres.in/#support-heading",
          text: "To keep ReqRes free, contributions towards server costs are appreciated!",
        },
      })
      .expectStatus(200);
  });

  it("should get single resource", async () => {
    await spec()
      .get(`${reqresUrl}api/unknown/2`)
      .expectJsonMatch({
        data: {
          id: 2,
          name: "fuchsia rose",
          year: 2001,
          color: "#C74375",
          pantone_value: "17-2031",
        },
        support: {
          url: "https://reqres.in/#support-heading",
          text: "To keep ReqRes free, contributions towards server costs are appreciated!",
        },
      })
      .expectStatus(200);
  });

  it("single resource not found", async () => {
    await spec().get(`${reqresUrl}api/unknown/23`).expectStatus(404);
  });
});
