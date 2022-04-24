import { Request, Response } from "express";
import { UserData } from "../services/userService.js";
import userService from "../services/userService.js";

export async function signIn(req: Request, res: Response) {
  const user: UserData = req.body;

  const data = await userService.signIn(user);

  res.status(200).send(data);
}
