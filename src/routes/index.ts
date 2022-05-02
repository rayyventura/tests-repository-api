import { Router } from "express";
import e2eTestRouter from "./e2eRouter.js";
import testsRouter from "./testsRouter.js";
import userRouter from "./userRouter.js";
import dotenv from "dotenv";
import categoriesRouter from "./categoriesRouter.js";
import teachersRouter from "./teachersRouter.js";
import disciplinesRouter from "./disciplinesRouter.js";
dotenv.config();

const router = Router();
router.use(userRouter);
router.use(testsRouter);
router.use(categoriesRouter);
router.use(teachersRouter);
router.use(disciplinesRouter);
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "test") {
  router.use(e2eTestRouter);
}

export default router;
