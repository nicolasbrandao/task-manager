import { Router } from "express"
import { task } from "../database/models/tasks"

export const taskController = Router()

taskController
  .use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

  .get('/', async (req, res) => {
    const tasks = await task.list()
    
    res.send(`List tasks: ${JSON.stringify(tasks)}`)
  })

  .post('/', async (req, res) => {
    const { counter } = await task.create({
      description: "description",
      title: "title"
    })
    res.send(`tasks counter: ${counter}`)
  })

  .delete('/:id', async (req, res) => {
    await task.delete(req.params.id)
    res.send('Delete task: ' + req.params.id)
  })

  .put('/:id', (req, res) => {
    res.send('Update task: ' + req.params.id)
  })

  .get('/:id', (req, res) => {
    res.send('Task: ' + req.params.id)
  })