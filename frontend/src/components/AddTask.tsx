import { Box, IconButton, TextField, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useCreateTaskMutation } from "../store";
import { FormEvent, useRef } from "react";
import { Task, TaskSchema } from "../lib/utils";



export default function AddTask() {
  const [createTask] = useCreateTaskMutation();
  
  // TODO: ensure this is the only possible type solution
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const handleTaskCreation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTitle = titleRef!.current!.value
    const newDescription = descriptionRef!.current!.value
    const task: Omit<Task, "id"> = { title: newTitle, description: newDescription }
    const result = TaskSchema
      .strict()
      .omit({ id: true })
      .safeParse(task);

    // TODO: handle errors properly
    if (result.success) {
      createTask(result.data)
    } else {
      console.log(result.error)
    }
  }

  return (
    <Box sx={{
      margin: "8px"
    }}>
      <form autoComplete="off" onSubmit={handleTaskCreation}>
        <Box sx={{
          display: "flex",
          gap: "8px"
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
          }}>
            <TextField
              label="Title"
              variant="outlined"
              required
              size='small'
              fullWidth
              inputRef={titleRef}
            />
            <TextField
              label="Description"
              variant="outlined"
              required
              size='small'
              fullWidth
              inputRef={descriptionRef}
            />
          </Box>
          <Tooltip title="Create task">
            <IconButton aria-label="create task" size="large" sx={{borderRadius: '4px'}} type="submit">
              <AddIcon fontSize="inherit" sx={{
                color: "primary.main",
              }} />
            </IconButton>
          </Tooltip>
        </Box>
      </form>
    </Box>
  )
}
