import express from "express"
import { taskController } from "./controllers/tasks"
import { initDatabase } from "./database/db"

const app = express()
const port = 3000

app.use('/tasks', taskController)

app.listen(port, async () => {
  await initDatabase();

  console.log(`Example app listening on port ${port}`)
})