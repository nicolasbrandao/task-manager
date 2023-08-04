export type Task = {
  id: string,
  title: string,
  description: string
}

const BASE_URL = "http://localhost:3000/tasks/"

export async function fetchAllTasks(): Promise<Task[]> {
  const tasks = await fetch(BASE_URL)
  return tasks.json()
}