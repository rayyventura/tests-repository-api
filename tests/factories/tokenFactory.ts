import supertest from "supertest";
import app from "../../src/app.js";
import { createBody } from "./userFactory.js";

export default async function createToken() {
  const body = await createBody("existingUser");

  const response = await supertest(app).post("/sign-in").send(body);

  return response.body.token;
}
