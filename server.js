import express from "express";
const app = express();
import morgan from "morgan";
import taskRouter from "./src/routers/taskRouter.js";
import { connectMongo } from "./src/config/mongoDbConfig.js";

const PORT = process.env.PORT || 8000;

connectMongo();

//middlewares

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
