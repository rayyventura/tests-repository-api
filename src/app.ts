import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import testsRouter from "./routes/testsRouter.js";

const app = express();
app.use(json());
app.use(cors());
app.use(userRouter);
app.use(testsRouter);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
