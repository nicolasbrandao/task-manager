import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <TaskList />
    </main>
  )
}
