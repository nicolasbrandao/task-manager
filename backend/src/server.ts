import express from "express"
import bodyParser from "body-parser"
import { taskController } from "./controllers/tasks"
import { initDatabase } from "./database/db"
import { timeLogger } from "./middlewares"
import cors from "cors"

const app = express()
const port = 3000

// middlewares
app.use(cors())
// TODO: use env var here
app.use('http://localhost:5173/', cors())
app.use(bodyParser.json())
app.use(timeLogger)

// endpoints
app.use('/tasks', taskController)

// init server
app.listen(port, async () => {
  await initDatabase();

  console.log(`Example app listening on port ${port}`)
})