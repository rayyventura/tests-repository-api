import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import * as testsController from "../controllers/examsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import examSchema from "../schemas/examSchema.js";

const testsRouter = Router();
testsRouter.use(verifyTokenMiddleware);
testsRouter.get("/tests/disciplines", testsController.getByDisciplines);
testsRouter.get("/tests/teachers", testsController.getByTeacher);
testsRouter.patch("/tests/:id/views", testsController.updateViews);
testsRouter.post(
  "/tests",
  validateSchemaMiddleware(examSchema),
  testsController.insert
);
export default testsRouter;
