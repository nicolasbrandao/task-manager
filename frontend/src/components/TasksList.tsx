import { fetchAllTasks } from "../lib/utils"

export default async function TasksList() {
  const tasks = await fetchAllTasks();
  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.description}</li>)}
    </ul>
  )
}