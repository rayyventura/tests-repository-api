import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import * as testsController from "../controllers/testsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import testSchema from "../schemas/testsSchema.js";

const testsRouter = Router();
testsRouter.use(verifyTokenMiddleware);
testsRouter.get("/tests/disciplines", testsController.getByDisciplines);
testsRouter.get("/tests/teachers", testsController.getByTeacher);
testsRouter.patch("/tests/:id/views", testsController.updateViews);
testsRouter.post(
  "/tests",
  validateSchemaMiddleware(testSchema),
  testsController.insert
);
export default testsRouter;
