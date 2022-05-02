import * as categoriesRepository from "../repositories/categoriesRepository.js";

export async function getAll() {
  const data = await categoriesRepository.findAll();
  return data;
}
