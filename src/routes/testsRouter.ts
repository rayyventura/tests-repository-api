import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import * as testsController from "../controllers/testsController.js";

const testsRouter = Router();
testsRouter.use(verifyTokenMiddleware);
testsRouter.get("/tests/disciplines", testsController.getByDisciplines);
testsRouter.get("/tests/teachers", testsController.getByTeacher);
export default testsRouter;
