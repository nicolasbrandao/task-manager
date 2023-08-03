import express from "express"
import { taskController } from "./controllers/tasks"

const app = express()
const port = 3000

app.use('/tasks', taskController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})