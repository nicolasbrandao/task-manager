import { Router, type Response, type Request } from "express";
import { TaskSchema, task } from "../database/models/tasks";
import { z } from "zod";

export const taskController = Router();

taskController
  .get("/", async (req: Request, res: Response) => {
    const query = z.string().default("").parse(req.query.q);
    const tasks = await task.search(query);
    res.status(200).json(tasks);
  })

  .post("/", async (req: Request, res: Response) => {
    const result = TaskSchema
      .strict()
      .omit({ id: true })
      .safeParse(req.body);

    // bad request
    if (!result.success) {
      return res.status(400).json(result.error);
    }

    const { title, description } = result.data;
    await task.create({ description, title });
    noContentResponse(res);
  })

  .delete("/:id", async (req: Request, res: Response) => {
    await task.delete(req.params.id);
    noContentResponse(res);
  })

  .put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = TaskSchema
      .strict()
      .safeParse({...req.body, id});

    if (!result.success) {
      return res.status(400).json(result.error);
    }

    await task.update(result.data);
    noContentResponse(res);
  });

const noContentResponse = (res: Response): Response => res.status(201).end();
