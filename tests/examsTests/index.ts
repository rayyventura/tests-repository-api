import supertest from "supertest";
import app from "../../src/app.js";
import { prisma } from "../../src/database.js";
import createToken from "./../factories/tokenFactory.js";
import { afterAlls } from "./../utils/beforeAndAfterAll.js";
import { createTest } from "./../factories/testFactory.js";

export async function examsTests() {
  describe(`PATCH /tests/1/views`, () => {
    afterAlls();

    it(`should update the views`, async () => {
      const token = await createToken();
      const testBefore = await prisma.test.findFirst();
      const response = await supertest(app)
        .patch(`/tests/${testBefore.id}/views`)
        .set({ Authorization: token });
      const testAfter = await prisma.test.findUnique({
        where: {
          id: testBefore.id,
        },
      });

      expect(testAfter.views).toBe(testBefore.views + 1);
      expect(response.status).toBe(200);
    });

    it("should answer with status 401 given invalid credentials", async () => {
      const token = "";
      const response = await supertest(app)
        .get(`/tests/1/views`)
        .set({ Authorization: token });
      expect(response.status).toBe(401);
    });
  });

  describe(`POST /tests`, () => {
    afterAlls();

    it("should answer with status 422 given invalid body", async () => {
      const body = {};
      const token = await createToken();
      const response = await supertest(app)
        .post("/tests")
        .send(body)
        .set({ Authorization: token });

      expect(response.status).toBe(422);
    });

    it(`should add a new test`, async () => {
      const test = await createTest();
      const token = await createToken();
      console.log(token, "tokne");

      const response = await supertest(app)
        .post("/tests")
        .send(test)
        .set({ Authorization: token });

      const createdTests = await prisma.test.findMany();

      expect(response.status).toBe(201);
      expect(createdTests.length).toBe(1);
    });
  });
}
