import * as discicplinesRepository from "../repositories/disciplinesRepository.js";

export async function getAll() {
  const data = await discicplinesRepository.findAll();
  return data;
}

export async function getTeacherDiscipline() {
  const data = await discicplinesRepository.getTeacherDisciplines();
  return data;
}
