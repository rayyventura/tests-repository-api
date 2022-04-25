import { Request, Response } from "express";
import { UserData } from "../services/userService.js";
import userService from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
  const user: UserData = req.body;

  await userService.signUp(user);

  res.sendStatus(200);
}
