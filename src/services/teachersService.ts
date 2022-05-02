import * as teachersRepository from "../repositories/teachersRepository.js";

export async function getAll() {
  const data = await teachersRepository.findAll();
  return data;
}
