import { Router } from "express";
import e2eTestRouter from "./e2eRouter.js";
import testsRouter from "./testsRouter.js";
import userRouter from "./userRouter.js";
import dotenv from "dotenv";
dotenv.config();

const router = Router();
router.use(userRouter);
router.use(testsRouter);
router.use(e2eTestRouter);
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "test") {
  router.use(e2eTestRouter);
}

export default router;
