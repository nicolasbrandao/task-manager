import TaskCard from "./TaskCard";
import { Alert, Box, CircularProgress, MenuList, Paper, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useQuery } from "../hooks/useQuery";
import { useSearchTasksQuery } from "../store";
import { Task } from "../entities/task";

export default function TasksList() {
  const query = useQuery();
  const searchParam = query.get("q") ?? "";
  const { data, isLoading, isError } = useSearchTasksQuery(searchParam);

  const tasks = data ?? [];

  const content = tasks.length > 0
    ? tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
    : <AlertContainer searchParam={searchParam} />;

  return (
    <Paper sx={{
      margin: "8px"
    }}
    >
      <MenuList>
        {isError && <Alert severity="error" sx={{ margin: "8px" }}>Error fetching tasks</Alert>}
        {isLoading ?
          <CircularProgress
            size={80}
            sx={{ margin: "200px auto"}}
            variant={"indeterminate"}
          />
          : content}
      </MenuList>
    </Paper>
  );
}

type AlertContainerProps = {
  searchParam: string
}

function AlertContainer ({searchParam}: AlertContainerProps) {
  return (
    <Box sx={{
      display: "flex",
      gap:"4px",
      justifyContent: "center",
      color: "primary.main",
      margin: "8px",
    }}
    >
      <InfoIcon />
      <Typography>
        {searchParam
          ? "No titles match the search query"
          : "Create a task using the input fields above"
        }
      </Typography>
    </Box>
  );
}
