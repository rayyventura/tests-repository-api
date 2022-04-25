import { prisma } from "../database.js";

export async function getByTeacher() {
  const data = await prisma.teacher.findMany({
    select: {
      id: true,
      name: true,
      teacherDiscipline: {
        select: {
          discipline: true,
          tests: {
            select: {
              name: true,
              pdfUrl: true,
              category: true,
            },
          },
        },
      },
    },
  });
  return data;
}

export async function getByDisciplines() {
  const data = await prisma.term.findMany({
    select: {
      id: true,
      number: true,
      disciplines: {
        select: {
          name: true,
          term: true,
          termId: true,
          teacherDiscipline: {
            select: {
              tests: {
                select: {
                  name: true,
                  pdfUrl: true,
                  category: true,
                },
              },
              teacher: { select: { name: true } },
            },
          },
        },
      },
    },
  });
  return data;
}
