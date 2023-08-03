import { z } from "zod";
import { db } from "../db";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
})

type Task = z.infer<typeof TaskSchema>;

type TaskCollection = {
  [task_id: string]: Omit<Task, 'id'>
}

const COLLECTION_NAME = "tasks"
const collection = db.ref(COLLECTION_NAME);

export class TaskDAO {
  async create(task: TaskCollection[string]) {
    await collection.push(task);
  }

  async list(): Promise<Task[]> {
    const snapshot = await collection.get<TaskCollection>();
    const taskCollection = snapshot.val() ?? {};
    console.log({ taskCollection });

    const tasks: Task[] = Object.entries(taskCollection).map(
      ([id, task]): Task => ({ id, ...task })
    );

    console.log({ tasks });
    return tasks;
  }

  async delete(id: string) {
    await db.ref(`${COLLECTION_NAME}/${id}`).remove()
  }

  async update(updatedTask: Task) {
    const { id, title, description } = updatedTask;
    await db
      .ref(`${COLLECTION_NAME}/${id}`)
      .update({ title, description })
  }
}

export const task = new TaskDAO();
