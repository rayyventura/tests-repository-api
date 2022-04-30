import * as testsRepository from "../repositories/testsRepository.js";

export async function getByTeacher() {
  const data = await testsRepository.getByTeacher();
  return data;
}

export async function getByDisciplines() {
  const data = await testsRepository.getByDisciplines();
  return data;
}
