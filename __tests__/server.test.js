require("dotenv").config();
const request = require("supertest");
const app = require("../server");

describe("Get /api/whoami", () => {
  it("returns a JSON object with your IP address", async () => {
    const response = await request(app).get("/api/whoami");
    expect(response.body).toHaveProperty("ipaddress");
    expect(response.body.ipaddress).toEqual(process.env.IP_ADDRESS);
  });

  it("retuns a JSON object with your preferred language", async () => {
    const response = await request(app).get("/api/whoami");
    expect(response.body).toHaveProperty("language");
    expect(response.body.language).toEqual("en-GB,en-US;q=0.9,en;q=0.8");
  });

  it("retuns a JSON object with your operating system", async () => {
    const response = await request(app).get("/api/whoami");
    expect(response.body).toHaveProperty("software");
    expect(response.body.software).toEqual(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Safari/537.36"
    );
  });
});
