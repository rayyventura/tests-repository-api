import { prisma } from "../../src/database.js";

export async function createTest() {
  await prisma.$executeRaw`TRUNCATE TABLE 
users, 
tests, 
teachers, 
categories, 
"teachersdisciplines", 
disciplines, 
terms;`;

  await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "P9",
    },
  });
  await prisma.teacher.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Dina",
    },
  });
  const teacher = await prisma.teacher.findFirst();
  await prisma.term.upsert({
    where: { id: 1 },
    update: {},
    create: {
      number: 1,
    },
  });
  const termId = await prisma.term.findFirst();
  await prisma.discipline.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Geometria Analítica",
      termId: termId.id,
    },
  });
  const discipline = await prisma.discipline.findFirst();
  await prisma.teachersDiscipline.upsert({
    where: { id: 1 },
    update: {},
    create: {
      teacherId: teacher.id,
      disciplineId: discipline.id,
    },
  });
  const category = await prisma.category.findFirst();

  const testBody = {
    title: "Espaço Vetorial",
    pdfUrl: "https://www.google.com/",
    categoryId: category.id,
    disciplineId: discipline.id,
    teacherId: teacher.id,
  };
  return testBody;
}
