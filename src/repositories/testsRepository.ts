import { Test } from "@prisma/client";
import { prisma } from "../database.js";

type CreateTest = Omit<Omit<Test, "id">, "views">;

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
                  id: true,
                  name: true,
                  pdfUrl: true,
                  category: true,
                  views: true,
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
              id: true,
              name: true,
              pdfUrl: true,
              category: true,
              views: true,
            },
          },
        },
      },
    },
  });
  return data;
}
export async function updateViews(id: number) {
  await prisma.test.update({
    where: {
      id,
    },
    data: {
      views: { increment: 1 },
    },
  });
}
export async function getTeacherDiscipline(
  disciplineId: number,
  teacherId: number
) {
  return await prisma.teachersDiscipline.findFirst({
    select: {
      id: true,
    },
    where: {
      teacherId,
      disciplineId,
    },
  });
}
export async function getTeacherDisciplines(
  disciplineId: number,
  teacherId: number
) {
  return await prisma.teachersDiscipline.findMany({});
}

export async function insert(data: CreateTest) {
  return await prisma.test.create({
    data,
  });
}
