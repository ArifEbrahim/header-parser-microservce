require('dotenv').config()
const request = require("supertest");
const app = require("../server");

describe("Get /api/whoami", () => {
  it("returns a JSON object with your IP address", async () => {
    const response = await request(app).get("/api/whoami");
    expect(response.body).toHaveProperty("ipaddress");
    expect(response.body.ipaddress).toEqual(process.env.IP_ADDRESS);
  });
});
