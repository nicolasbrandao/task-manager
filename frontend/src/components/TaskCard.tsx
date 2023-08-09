import { Box, IconButton, ListItemText, MenuItem, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Task } from "../entities/task";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";
import { useDeleteTaskMutation } from "../store";
import { MouseEventHandler, useState } from "react";
import EditTaskDialog from "./EditTaskDialog";

type Props = {
  task: Task
}

export default function TaskCard({ task }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpen, setIsOpen] = useState(false);

  const handleEditTask = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const [deleteTask] = useDeleteTaskMutation();

  const handleRemoveTask: MouseEventHandler<HTMLButtonElement> = (event) => {
    deleteTask(task.id);
    event.stopPropagation();
  };

  return (
    <>
      <MenuItem onClick={handleEditTask}>
        <ListItemText primary={task.title} />
        <Typography
          noWrap
          sx={{
            display: `${isSmallScreen && "none"}`,
            marginRight: "16px",
            color: "grey.400",
            maxWidth: "50%"
          }}
        >{task.description}</Typography>
        <Box>
          <Tooltip title="Edit task">
            <IconButton aria-label="edit task" onClick={handleEditTask}>
              <EditIcon
                sx={{
                  color: "primary.main"
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove task">
            <IconButton aria-label="remove task" onClick={handleRemoveTask}>
              <HighlightOffIcon
                sx={{
                  color: "primary.main"
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </MenuItem>
      <EditTaskDialog
        editingTask={task}
        handleClose={handleClose}
        isEditingDialogOpen={isOpen}
      />
    </>
  );
}
