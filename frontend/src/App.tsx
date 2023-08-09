import { Alert, Box, CircularProgress } from "@mui/material";
import AddTask from "./components/AddTask";
import Hero from "./components/Hero";
import TasksList from "./components/TasksList";
import { useSearchTasksQuery } from "./store";
import SearchBar from "./components/SearchBar";
import { useQuery } from "./hooks/useQuery";

function App() {
  const query = useQuery();
  const searchParam = query.get("q") ?? "";
  const { data, isLoading, isError } = useSearchTasksQuery(searchParam);

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        minWidth: "380px",
        minHeight: "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Hero />
      <AddTask />
      <SearchBar />
      {isError && <Alert severity="error" sx={{ margin: "8px" }}>Error fetching tasks</Alert>}
      {isLoading ?
        <CircularProgress
          size={80}
          sx={{ margin: "200px auto"}}
          variant={"indeterminate"}
        />
        : <TasksList tasks={data}/>}
    </Box>
  );
}

export default App;
