import { Router } from "express";
import { getAll } from "../controllers/categoriesController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoriesRouter = Router();
categoriesRouter.use(verifyTokenMiddleware);
categoriesRouter.get("/categories", getAll);

export default categoriesRouter;
