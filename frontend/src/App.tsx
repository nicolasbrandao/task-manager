import { Box, CircularProgress } from '@mui/material'
import AddTask from './components/AddTask'
import Hero from './components/Hero'
import TasksList from './components/TasksList'
import EditTaskDialog from './components/EditTaskDialog'
import { updateTasksList, useFetchAllTasksQuery } from './store'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  const { data, isLoading } = useFetchAllTasksQuery()

  if (data) dispatch(updateTasksList(data))

  return (
    <Box 
      sx={{
        maxWidth: "1000px",
        minWidth: "380px",
        minHeight: "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <Hero />
      <AddTask />
        {isLoading
          ? <CircularProgress variant={"indeterminate"} size={80} sx={{ margin: "2000px auto"}}/>
          : <TasksList />
        }
      <EditTaskDialog />
    </Box>
  )
}

export default App
