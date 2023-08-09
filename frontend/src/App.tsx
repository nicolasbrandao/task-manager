import { Alert, Box, CircularProgress } from "@mui/material";
import AddTask from "./components/AddTask";
import Hero from "./components/Hero";
import TasksList from "./components/TasksList";
import EditTaskDialog from "./components/EditTaskDialog";
import { RootState, updateSearchingTerm, updateTasksList, useSearchTasksQuery } from "./store";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { z } from "zod";
import { useQuery } from "./hooks/useQuery";

function App() {
  const  { searchingTerm } = useSelector((state: RootState) => {
    return {
      searchingTerm: state.tasks.searchingTerm
    };
  });

  const dispatch = useDispatch();

  const query = useQuery();
  const searchParam = query.get("q") ?? "";

  useEffect(() => {
    const parsedParam = z.string().default("").parse(searchParam);
    dispatch(updateSearchingTerm(parsedParam as string));
  }, [dispatch, searchParam]);

  const { data, isLoading, isError } = useSearchTasksQuery(searchingTerm);

  if (data) dispatch(updateTasksList(data));

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
        : <TasksList />}
      <EditTaskDialog />
    </Box>
  );
}

export default App;
