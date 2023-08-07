import { RootState } from "../store"
import TaskCard from "./TaskCard"
import { Box, MenuList, Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import InfoIcon from '@mui/icons-material/Info';


export default function TasksList() {
  const { tasks, searchingTerm } = useSelector((state: RootState) => {
    return {
      tasks: state.tasks.tasks,
      searchingTerm: state.tasks.searchingTerm
    }
  })

  const content = tasks.length > 0
    ? tasks.map(task => <TaskCard key={task.id} task={task} />)
    : (
        <Box sx={{
          display: "flex",
          gap:"4px",
          justifyContent: "center",
          color: "primary.main",
          margin: "8px",
        }}>
          <InfoIcon />
          <Typography>
            {searchingTerm 
              ? "No titles match the search query"
              : "Create a task using the input fields above"
            }
            </Typography>
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
