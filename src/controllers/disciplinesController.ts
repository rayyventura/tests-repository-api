import { Request, Response } from "express";
import * as disciplinessService from "../services/disciplinesService.js";

export async function getAll(req: Request, res: Response) {
  const data = await disciplinessService.getAll();
  res.status(200).send(data);
}
export async function getTeacherDiscipline(req: Request, res: Response) {
  const data = await disciplinessService.getTeacherDiscipline();
  res.status(200).send(data);
}
