import "./TasksList.styles.css"
const tasks = [
  {
    "id": "lkvor0rb0000qs81x3xswgpt",
    "description": "description",
    "title": "title"
  },
  {
    "id": "lkvorbgs0002qs81396oadyw",
    "description": "description",
    "title": "title"
  },
  {
    "id": "lkvnyz4h0000va811a5nxpsk",
    "title": "title updated2",
    "description": "description updated2"
  },
  {
    "id": "lkvpqzkb0000ep81w9uo7nis",
    "description": "description",
    "title": "title"
  },
  {
    "id": "lkvprjp60002ep81lj0qmj1r",
    "description": "description",
    "title": "title"
  },
  {
    "id": "lkvptovj0000es81jqa8hjot",
    "description": "create2",
    "title": "create2"
  },
  {
    "id": "lkvripl400003t8137imxkup",
    "description": "create2",
    "title": "create2"
  },
  {
    "id": "lkvrj0pm00023t81q9myo7jw",
    "description": "create2",
    "title": "create2"
  }
]

export default function TasksList() {

  return (
    <ul className="tasks-list">
      {tasks.map(task => <li key={task.id}>{task.title}</li>)}
    </ul>
  )
}