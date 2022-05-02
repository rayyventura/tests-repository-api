import { Router } from "express";
import {
  getAll,
  getTeacherDiscipline,
} from "../controllers/disciplinesController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const disciplinesRouter = Router();
disciplinesRouter.use(verifyTokenMiddleware);
disciplinesRouter.get("/disciplines", getAll);
disciplinesRouter.get("/teachersDisciplines", getTeacherDiscipline);

export default disciplinesRouter;
