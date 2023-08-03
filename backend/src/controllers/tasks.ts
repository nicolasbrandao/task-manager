import { Router, Response } from "express"
import { task } from "../database/models/tasks"

export const taskController = Router()

taskController
  .get('/', async (req, res) => {
    const tasks = await task.list()
    res.json(tasks)
  })

  .post('/', async (req, res) => {
    await task.create({
      description: "description",
      title: "title"
    })
    noContentResponse(res)
  })

  .delete('/:id', async (req, res) => {
    await task.delete(req.params.id)
    noContentResponse(res)
  })

  .put('/:id', async (req, res) => {
    await task.update({
      id: req.params.id,
      description: "description updated2",
      title: "title updated2"
    })
    noContentResponse(res)
  })

const noContentResponse = (res: Response) => res.status(201).end()