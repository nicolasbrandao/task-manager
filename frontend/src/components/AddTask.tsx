import { Alert, Box, IconButton, TextField, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useCreateTaskMutation } from "../store";
import { FormEvent, useRef, useState } from "react";
import { Task, TaskSchema } from "../lib/utils";
import CloseIcon from '@mui/icons-material/Close';




export default function AddTask() {
  const [createTask] = useCreateTaskMutation();
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false)
  }
  
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
      setShowAlert(true)
    }
  }

  return (
    <Box sx={{
      margin: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
      {showAlert &&
        <Alert 
          severity="error"
          action={
            <IconButton 
              color="inherit" 
              size="small"
              onClick={handleCloseAlert}
            >
              <CloseIcon />
            </IconButton>
          }
        >
          Failed to create task
        </Alert>
      }
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
              inputProps={{maxlength: "22"}}
            />
            <TextField
              label="Description"
              variant="outlined"
              required
              size='small'
              fullWidth
              inputRef={descriptionRef}
              multiline
              rows={1}
              inputProps={{maxlength: "80"}}
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
