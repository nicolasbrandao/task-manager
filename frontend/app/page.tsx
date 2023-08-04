import TasksList from "../components/TasksList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-800">
      <TasksList />
    </main>
  )
}
