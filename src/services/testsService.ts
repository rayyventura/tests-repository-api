import * as testsRepository from "../repositories/testsRepository.js";
import { CreateTest } from "../schemas/testsSchema.js";

export async function getByTeacher() {
  const data = await testsRepository.getByTeacher();
  return data;
}

export async function getByDisciplines() {
  const data = await testsRepository.getByDisciplines();
  return data;
}
export async function updateViews(id: number) {
  await testsRepository.updateViews(id);
}
export async function insert({
  title,
  pdfUrl,
  categoryId,
  teacherId,
  disciplineId,
}: CreateTest) {
  const { id: teacherDisciplineId } =
    await testsRepository.getTeacherDiscipline(disciplineId, teacherId);

  await testsRepository.insert({
    name: title,
    pdfUrl: pdfUrl,
    categoryId: categoryId,
    teacherDisciplineId,
  });
}
