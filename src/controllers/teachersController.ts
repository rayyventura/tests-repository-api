import { Request, Response } from "express";
import * as teacherssService from "../services/teachersService.js";

export async function getAll(req: Request, res: Response) {
  const data = await teacherssService.getAll();
  res.status(200).send(data);
}
