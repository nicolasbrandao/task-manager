import express from "express";
import bodyParser from "body-parser";
import { taskController } from "./controllers/tasks";
import { initDatabase } from "./database/db";
import { timeLogger } from "./middlewares";
import cors from "cors";

const app = express();
const port = 3000;

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;  // 'http://localhost:5173' TODO: pegar de env var

// middlewares
// TODO: conferir o cors para somente uma origem ou mais
app.use(cors());
app.use(bodyParser.json());
app.use(timeLogger);

// endpoints
app.use("/tasks", taskController);

// init server
app.listen(port, async () => {
  await initDatabase();

  console.log(`Example app listening on port ${port}`);
});
