import { RootState } from "../store"
import TaskCard from "./TaskCard"
import { MenuList, Paper } from "@mui/material"
import { useSelector } from "react-redux"

export default function TasksList() {
  const { tasks } = useSelector((state: RootState) => {
    return {
      tasks: state.tasks.tasks
    }
  })
  return (
    <Paper sx={{
      margin: "8px"
    }}>
        <MenuList>
          {tasks.map(task => <TaskCard key={task.id} task={task} />)}
        </MenuList>
    </Paper>
  )
}
