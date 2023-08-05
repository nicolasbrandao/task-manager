import { Typography } from "@mui/material";
import "./Hero.styles.css"
import AddTaskIcon from '@mui/icons-material/AddTask';


export default function Hero() {
  return (
    <div className="container">
      <AddTaskIcon 
        sx={{
          height: "50px",
          width: "50px",
          color: "var(--task-orange)"
        }}
      />
      <Typography
        component="h1"
        variant="h4"
      >Task Manager</Typography>
    </div>
  )
}