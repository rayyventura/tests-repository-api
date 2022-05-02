import { prisma } from "../database.js";

export async function findAll() {
  return prisma.discipline.findMany();
}

export async function getTeacherDisciplines() {
  return await prisma.teachersDiscipline.findMany({
    include: {
      teacher: true,
      discipline: true,
    },
  });
}
