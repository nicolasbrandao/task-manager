import { fetchAllTasks } from "../lib/utils"

const tasks = await fetchAllTasks();

export default function TasksList() {

  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.description}</li>)}
    </ul>
  )
}