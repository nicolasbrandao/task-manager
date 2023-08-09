import { Box } from "@mui/material";
import AddTask from "./components/AddTask";
import Hero from "./components/Hero";
import TasksList from "./components/TasksList";
import SearchBar from "./components/SearchBar";

function App() {
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
      <TasksList />
    </Box>
  );
}

export default App;
