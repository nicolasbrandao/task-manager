import { Router, Response } from "express"
import { TaskSchema, task } from "../database/models/tasks"

export const taskController = Router()

taskController
  .get('/', async (req, res) => {
    const tasks = await task.list()
    res.status(200).json(tasks)
  })

  .post('/', async (req, res) => {
    const result = TaskSchema
      .strict()
      .omit({ id: true })
      .safeParse(req.body);

    // bad request
    if (!result.success) {
      return res.status(400).json(result.error);
    }

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

    const result = TaskSchema
      .strict()
      .safeParse({ id, description, title });

    // bad request
    if (!result.success) {
      return res.status(400).json(result.error);
    }

    await task.update(result.data)
    noContentResponse(res)
  })

const noContentResponse = (res: Response) => res.status(201).end()