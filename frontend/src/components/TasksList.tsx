import { RootState } from "../store"
import TaskCard from "./TaskCard"
import { Box, MenuList, Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import InfoIcon from '@mui/icons-material/Info';


export default function TasksList() {
  const { tasks } = useSelector((state: RootState) => {
    return {
      tasks: state.tasks.tasks
    }
  })

  const content = tasks.length > 0
    ? tasks.map(task => <TaskCard key={task.id} task={task} />)
    : (
        <Box sx={{
          display: "flex",
          color: "primary.main",
          margin: "8px",
          gap:"4px"
        }}>
          <InfoIcon />
          <Typography>Create a task using the input fields above</Typography>
        </Box>
      )
  return (
    <Paper sx={{
      margin: "8px"
    }}>
        <MenuList>
          {content}
        </MenuList>
    </Paper>
  )
}
