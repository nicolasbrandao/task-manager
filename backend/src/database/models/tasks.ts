import { db } from "../db";

type Task = {
  id: string;
  title: string;
  description: string;
};

const COLLECTION_NAME = "tasks"
const collection = db.ref(COLLECTION_NAME);

export class TaskDAO {
  async create(task: Omit<Task, "id">) {
    await collection.push(task);
    const counter = await collection.count();
    return { counter };
  }

  async list(): Promise<Task[]> {
    const snapshot = await collection.get<Record<string, Omit<Task, "id">>>();
    const taskCollection = snapshot.val() ?? {};
    console.log({ taskCollection });

    const tasks: Task[] = Object.entries(taskCollection).map(
      ([id, task]): Task => ({ id, ...task })
    );

    console.log({ tasks });
    return tasks;
  }

  async delete(id: string) {
    return db.ref(`${COLLECTION_NAME}/${id}`).remove()
  }
}

export const task = new TaskDAO();
