import { Router, Response } from "express"
import { task } from "../database/models/tasks"

export const taskController = Router()

taskController
  .get('/', async (req, res) => {
    const tasks = await task.list()
    res.json(tasks)
  })

  .post('/', async (req, res) => {
    const { title, description } = req.body
    await task.create({ description, title })
    noContentResponse(res)
  })

  .delete('/:id', async (req, res) => {
    await task.delete(req.params.id)
    noContentResponse(res)
  })

  .put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    await task.update({ id, description, title })
    noContentResponse(res)
  })

const noContentResponse = (res: Response) => res.status(201).end()