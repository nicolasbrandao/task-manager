import TaskCard from "./TaskCard";
import { Box, MenuList, Paper, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useQuery } from "../hooks/useQuery";
import { Task } from "../lib/utils";

type Props = {
  tasks: Task[]
}

export default function TasksList({ tasks }: Props) {

  const query = useQuery();
  const searchParam = query.get("q") ?? "";

  const content = tasks.length > 0
    ? tasks.map(task => <TaskCard key={task.id} task={task} />)
    : (
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
  return (
    <Paper sx={{
      margin: "8px"
    }}
    >
      <MenuList>
        {content}
      </MenuList>
    </Paper>
  );
}
