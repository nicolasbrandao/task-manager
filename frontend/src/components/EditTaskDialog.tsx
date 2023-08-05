import { Dialog, DialogTitle, Button, Box, TextField, DialogActions, DialogContent } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Task } from "../lib/utils";
import { RootState, toggleEditDialog, updateEditingTask } from "../store";
import { useSelector, useDispatch } from "react-redux"

type FormProps = {
  task: Task
}

function EditTaskForm({ task }: FormProps) {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <Box sx={{
      margin: "8px"
    }}>
      <form noValidate autoComplete="off">
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
              value={title}
              onChange={handleTitleChange}
              variant="outlined"
              required
              size='small'
              fullWidth
            />
            <TextField
              label="Description"
              value={description}
              onChange={handleDescriptionChange}
              variant="outlined"
              required
              size='small'
              fullWidth
            />
          </Box>
        </Box>
      </form>
    </Box>
  )
}

type DialogProps = {
  task: Task,
}

export default function EditTask({ task }: DialogProps) {
  const { isEditingDialogOpen, } = useSelector((state: RootState) => {
    return {
      isEditingDialogOpen: state.tasks.isEditingDialogOpen
    }
  })

  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleEditDialog(false))
  }

  const handleSave = () => {
    dispatch(updateEditingTask(task))
    // TODO: MAKE UPDATE TASK REQUEST
    handleClose()
  }

  return (
    <Dialog open={isEditingDialogOpen} onClose={handleClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <EditTaskForm task={task} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
