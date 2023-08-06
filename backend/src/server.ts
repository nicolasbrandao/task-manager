import express from "express"
import bodyParser from "body-parser"
import { taskController } from "./controllers/tasks"
import { initDatabase } from "./database/db"
import { timeLogger } from "./middlewares"
import cors from "cors"

const app = express()
const port = 3000

// middlewares
// TODO: use env var e conferir o cors para somente uma origem ou mais
app.use(cors())
app.use(bodyParser.json())
app.use(timeLogger)

// endpoints
app.use('/tasks', taskController)

// init server
app.listen(port, async () => {
  await initDatabase();

  console.log(`Example app listening on port ${port}`)
})