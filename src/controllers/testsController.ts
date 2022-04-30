import { Request, Response } from "express";
import * as testsService from "../services/testsService.js";

export async function getByDisciplines(req: Request, res: Response) {
  const data = await testsService.getByDisciplines();
  res.send(data);
}

export async function getByTeacher(req: Request, res: Response) {
  const data = await testsService.getByTeacher();
  res.send(data);
}
export async function update(req: Request, res: Response) {
  const data = await testsService.getByTeacher();
  res.send(data);
}
