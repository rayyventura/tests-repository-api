import { prisma } from "../src/database.js";

async function main() {
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
  const teacherDiscipline = await prisma.teachersDiscipline.findFirst();
  await prisma.test.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Espaço Vetorial",
      pdfUrl: "https://www.google.com/",
      teacherDisciplineId: teacherDiscipline.id,
      categoryId: category.id,
    },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
