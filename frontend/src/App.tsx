import { Alert, Box, CircularProgress } from '@mui/material'
import AddTask from './components/AddTask'
import Hero from './components/Hero'
import TasksList from './components/TasksList'
import EditTaskDialog from './components/EditTaskDialog'
import { RootState, updateTasksList, useFetchAllTasksQuery, useSearchTasksQuery } from './store'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from './components/SearchBar'

function App() {
  const  { searchingTerm } = useSelector((state: RootState) => {
    return {
      searchingTerm: state.tasks.searchingTerm
    }
  });
  const dispatch = useDispatch()

  // TODO: Check this
  const fetchTasksData = searchingTerm.length > 0 ? useSearchTasksQuery : useFetchAllTasksQuery
  const { data, isLoading, isError } = fetchTasksData(searchingTerm || undefined);
 
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
      <SearchBar />
        {isError && <Alert severity="error">Error fetching tasks</Alert>}
        {isLoading
          ? <CircularProgress variant={"indeterminate"} size={80} sx={{ margin: "2000px auto"}}/>
          : <TasksList />
        }
      <EditTaskDialog />
    </Box>
  )
}

export default App
