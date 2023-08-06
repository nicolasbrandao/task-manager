import { Box } from '@mui/material'
import AddTask from './components/AddTask'
import Hero from './components/Hero'
import TasksList from './components/TasksList'
import EditTaskDialog from './components/EditTaskDialog'
import { updateTasksList, useFetchAllTasksQuery } from './store'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  const { data } = useFetchAllTasksQuery()

  if (data) dispatch(updateTasksList(data))

  return (
    <Box 
      sx={{
        maxWidth: "1000px",
        minWidth: "380px",
        margin: "0 auto"
      }}
    >
      <Hero />
      <AddTask />
      <TasksList />
      <EditTaskDialog />
    </Box>
  )
}

export default App
