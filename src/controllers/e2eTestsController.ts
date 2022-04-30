import { Request, Response } from "express";
import * as e2eTest from "../services/e2eTestsService.js";

export async function resetDatabase(req: Request, res: Response) {
  await e2eTest.resetDatabase();
  res.status(200);
}
