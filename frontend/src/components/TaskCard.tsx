import { Box, IconButton, ListItemText, MenuItem, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Task } from "../lib/utils";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import { toggleEditDialog, updateEditingTask } from "../store";

type Props = {
  task: Task
}

export default function TaskCard({ task }: Props) {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch()

  const handleEditTask = (task: Task) => {
    dispatch(updateEditingTask(task))
    dispatch(toggleEditDialog(true))
  }

  return (
    <MenuItem>
      <ListItemText primary={task.title} />
      <Typography 
        sx={{
          display: `${isSmallScreen && "none"}`,
          marginRight: "16px",
          color: "grey.400",
        }}
        noWrap>{task.description}</Typography>
      <Box>
        <Tooltip title="Edit task">
          <IconButton aria-label="edit task" onClick={() => handleEditTask(task)}>
            <EditIcon
              sx={{
                color: "primary.main"
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove task">
          <IconButton aria-label="remove task">
            <HighlightOffIcon
              sx={{
                color: "primary.main"
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </MenuItem>
  )
}
