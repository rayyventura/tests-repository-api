import { prisma } from "../../src/database.js";

export async function afterAlls() {
  afterAll(async () => {
    await prisma.$disconnect();
  });
}

export async function beforeAlls() {
  beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE 
    users, 
    tests, 
    teachers, 
    categories, 
    "teachersdisciplines", 
    disciplines, 
    terms;`;
  });
}
