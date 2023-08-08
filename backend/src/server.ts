import express from "express";
import bodyParser from "body-parser";
import { taskController } from "./controllers/tasks";
import { initDatabase } from "./database/db";
import { timeLogger } from "./middlewares";
import cors from "cors";

const app = express();
const port = 3000;

// middlewares
// TODO: config cors
app.use(cors());
app.use(bodyParser.json());
app.use(timeLogger);

// endpoints
app.use("/tasks", taskController);

// init server
initDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database initialization failed:", error);
  });
