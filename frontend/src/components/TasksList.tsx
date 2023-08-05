import TaskCard from "./TaskCard"
import "./TasksList.styles.css"
import { Paper } from "@mui/material"

const tasks = [
  {
    "id": "lkvor0rb0000qs81x3xswgpt",
    "description": "Prepare monthly financial report for review.",
    "title": "Financial Reporting"
  },
  {
    "id": "lkvorbgs0002qs81396oadyw",
    "description": "Create presentation slides for the marketing strategy.",
    "title": "Marketing Presentation"
  },
  {
    "id": "lkvnyz4h0000va811a5nxpsk",
    "title": "Market Research",
    "description": "Analyze market trends and competitor data."
  },
  {
    "id": "lkvpqzkb0000ep81w9uo7nis",
    "description": "Edit and proofread the user manual before publishing.",
    "title": "User Manual Editing"
  },
  {
    "id": "lkvprjp60002ep81lj0qmj1r",
    "description": "Schedule and coordinate the team-building event.",
    "title": "Team-Building Event"
  },
  {
    "id": "lkvptovj0000es81jqa8hjot",
    "description": "Test the new software features and report any bugs.",
    "title": "Software Testing"
  },
  {
    "id": "lkvripl400003t8137imxkup",
    "description": "Develop a comprehensive marketing campaign for the product launch.",
    "title": "Product Launch Campaign"
  },
  {
    "id": "lkvrj0pm00023t81q9myo7jw",
    "description": "Design and create a prototype for client feedback.",
    "title": "Prototype Development"
  }
]

export default function TasksList() {
  return (
    <Paper
      sx={{
        backgroundColor: "var(--task-gray-2)",
        margin: "16px",
      }}>
        <ul className="tasks-list">
          {tasks.map(task => <TaskCard task={task} />)}
        </ul>
    </Paper>
  )
}
