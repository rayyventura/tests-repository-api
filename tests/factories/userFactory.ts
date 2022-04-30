import { faker } from "@faker-js/faker";
import { prisma } from "../../src/database.js";
import bcrypt from "bcrypt";
import { UserData } from "../../src/services/userService.js";

export async function createBody(type: string) {
  const user: UserData = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  if (type === "existingUser") {
    await prisma.user.create({
      data: {
        email: user.email,
        password: bcrypt.hashSync(user.password, 10),
      },
    });
  }
  return user;
}
