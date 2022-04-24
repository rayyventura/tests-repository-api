import Router from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schemas/userSchema.js";
import * as userController from "../controllers/userController.js";
import { signIn } from "../controllers/authController.js";

const userRouter = Router();

userRouter.post("/sign-in", validateSchemaMiddleware(userSchema), signIn);
userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema),
  userController.signUp
);

export default userRouter;
