import { Request, Response } from "express";
import * as categoriessService from "../services/categoriesService.js";

export async function getAll(req: Request, res: Response) {
  const data = await categoriessService.getAll();
  res.send(data);
}
