import { Router } from "express";
import { getAll } from "../controllers/teachersController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const teachersRouter = Router();
teachersRouter.use(verifyTokenMiddleware);
teachersRouter.get("/teachers", getAll);

export default teachersRouter;
