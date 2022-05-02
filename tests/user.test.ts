import supertest from "supertest";
import app from "../src/app.js";
import { createBody } from "./factories/userFactory.js";
import { prisma } from "../src/database.js";
import createToken from "./factories/tokenFactory.js";
import { afterAlls, beforeAlls } from "./factories/beforeAndAfterAll.js";
import { getData, getTestsData } from "./genericTests/getData.js";
import { faker } from "@faker-js/faker";
import { createTest } from "./factories/testFactory.js";

describe("POST /sign-in", () => {
  afterAlls();
  it("should answer with status 200 when given valid credentials", async () => {
    const body = await createBody("existingUser");

    const response = await supertest(app).post("/sign-in").send(body);

    expect(response.status).toBe(200);
  });
  it("should answer with a valid token", async () => {
    const body = await createBody("existingUser");

    const response = await supertest(app).post("/sign-in").send(body);

    expect(response.body).not.toBe(null);
  });
  it("should answer with status 401 when given invalid credentials", async () => {
    const body = await createBody("newUser");

    const response = await supertest(app).post("/sign-in").send(body);

    expect(response.status).toBe(401);
  });
});

describe("POST /sign-up", () => {
  afterAlls();
  it("should answer with status 201 when given valid body and persist the user", async () => {
    const body = await createBody("newUser");

    const response = await supertest(app).post("/sign-up").send(body);

    expect(response.status).toBe(201);

    const insertedUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    expect(insertedUser).not.toBe(null);
  });
  it("should return 422 given an invalid body", async () => {
    const body = {};

    const response = await supertest(app).post("/sign-up").send(body);

    expect(response.status).toBe(422);
  });

  it("should return 409 given an existing user", async () => {
    const body = await createBody("existingUser");

    const response = await supertest(app).post("/sign-up").send(body);

    expect(response.status).toBe(409);
  });
});

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

getData("categories");
getData("disciplines");
getData("teachersDisciplines");
getData("teachers");
getTestsData("disciplines");
getTestsData("teachers");
