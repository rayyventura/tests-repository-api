import supertest from "supertest";
import app from "../../src/app.js";
import { createBody } from "../factories/userFactory.js";
import { prisma } from "../../src/database.js";
import createToken from "../factories/tokenFactory.js";
import { afterAlls } from "../factories/beforeAndAfterAll.js";

export async function getData(data: string) {
  describe(`GET /${data}`, () => {
    afterAlls();

    it(`should answer an array of ${data}`, async () => {
      const token = await createToken();
      const response = await supertest(app)
        .get(`/${data}`)
        .set({ Authorization: token });
      expect(response.status).toBe(200);
      expect(typeof response.body).toBe("object");
    });
    it("should answer with status 401 given invalid credentials", async () => {
      const token = "";
      const response = await supertest(app)
        .get(`/${data}`)
        .set({ Authorization: token });
      expect(response.status).toBe(401);
    });
  });
}
export async function getTestsData(data: string) {
  describe(`GET /tests/${data}`, () => {
    afterAlls();

    it(`should answer an array of ${data}`, async () => {
      const token = await createToken();
      const response = await supertest(app)
        .get(`/tests/${data}`)
        .set({ Authorization: token });
      expect(response.status).toBe(200);
      expect(typeof response.body).toBe("object");
    });
    it("should answer with status 401 given invalid credentials", async () => {
      const token = "";
      const response = await supertest(app)
        .get(`/tests/${data}`)
        .set({ Authorization: token });
      expect(response.status).toBe(401);
    });
  });
}
