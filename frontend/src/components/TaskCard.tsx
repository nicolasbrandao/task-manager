import "./TaskCard.styles.css"
import { ListItemButton, ListItemText, Typography } from "@mui/material";
import { Task } from "../lib/utils";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  task: Task
}

export default function TaskCard({ task }: Props) {
  return (
    <ListItemButton
      key={task.id}
      component="li"
      sx={{
        display: "flex",
        gap: "16px"
      }}
      >
      <ListItemText primary={task.title} color="main" sx={{color: "primary.main"}}/>
      <Typography className="task-description">{task.description}</Typography>
      <div className="edit-task-container">
        <EditIcon />
        <HighlightOffIcon />
      </div>
    </ListItemButton>
  )
}