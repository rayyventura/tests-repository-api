import { prisma } from "../database.js";
import { UserData } from "../services/userService.js";

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function insert(UserData: UserData) {
  await prisma.user.create({
    data: UserData,
  });
}

export default {
  findByEmail,
  insert,
  findById,
};
