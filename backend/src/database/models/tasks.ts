import { db } from "../db";
import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(22),
  description: z.string().min(1).max(80),
});

type Task = z.infer<typeof TaskSchema>;

type TaskCollection = Record<string, Omit<Task, "id">>;

const COLLECTION_NAME = "tasks";
const collection = db.ref(COLLECTION_NAME);

export class TaskDAO {
  async create(task: TaskCollection[string]): Promise<void> {
    await collection.push(task);
  }

  async search(searchTerm: string): Promise<Task[]> {
    const tasksSnapshotArray = await collection.query()
      .filter("title", "like", `*${searchTerm}*`)
      .get();

    const tasks = tasksSnapshotArray.map((task) => {
      return TaskSchema.parse({
        id: task.key,
        ...task.val() ?? {}
      });
    });

    console.log(tasks);
    return tasks;
  }

  async delete(id: string): Promise<void> {
    await db.ref(`${COLLECTION_NAME}/${id}`).remove();
  }

  async update(updatedTask: Task): Promise<void> {
    const { id, title, description } = updatedTask;
    await db
      .ref(`${COLLECTION_NAME}/${id}`)
      .update({ title, description });
  }
}

export const task = new TaskDAO();
