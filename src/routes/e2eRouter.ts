import { Router } from "express";
import { resetDatabase } from "../controllers/e2eTestsController.js";

const e2eTestRouter = Router();
e2eTestRouter.post("/resetDatabase", resetDatabase);
export default e2eTestRouter;
