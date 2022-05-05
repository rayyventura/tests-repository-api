import { Request, Response } from "express";
import { CreateTest } from "../schemas/examSchema.js";
import * as testsService from "../services/testsService.js";

export async function getByDisciplines(req: Request, res: Response) {
  const data = await testsService.getByDisciplines();
  res.status(200).send(data);
}

export async function getByTeacher(req: Request, res: Response) {
  const data = await testsService.getByTeacher();
  res.status(200).send(data);
}
export async function updateViews(req: Request, res: Response) {
  const { id } = req.params;
  await testsService.updateViews(Number(id));
  res.sendStatus(200);
}
export async function insert(req: Request, res: Response) {
  const data: CreateTest = req.body;
  await testsService.insert(data);
  res.sendStatus(201);
}
