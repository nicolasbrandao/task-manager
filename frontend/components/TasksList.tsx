import { fetchAllTasks } from "@/app/lib/utils"
import { Task } from "@/types"

export default async function TaskList() {
  const tasks = await fetchAllTasks()
  return (
    <section className="p-4 w-full">
      <ul className="flex flex-col gap-2 border border-white">
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </section>
  )
}
