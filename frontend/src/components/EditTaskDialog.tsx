import { Dialog, DialogTitle, Button, Box, TextField, DialogActions, DialogContent } from "@mui/material";
import { RootState, toggleEditDialog, updateEditingTask, useUpdateTaskMutation } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { FormEvent, useRef } from "react";
import { TaskSchema } from "../lib/utils";

export default function EditTask() {
  const { isEditingDialogOpen, editingTask } = useSelector((state: RootState) => {
    return {
      isEditingDialogOpen: state.tasks.isEditingDialogOpen,
      editingTask: state.tasks.editingTask
    }
  })

  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleEditDialog(false))
  }

  // TODO: ensure this is the only possible type solution
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const [updateTask] = useUpdateTaskMutation()

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedTask = {
      id: editingTask.id,
      title: titleRef!.current!.value,
      description: descriptionRef!.current!.value
    }
    const result = TaskSchema
      .strict()
      .safeParse(updatedTask);

    // TODO: handle errors properly
    if (result.success) {
      dispatch(updateEditingTask(result.data))
      updateTask(result.data)
    } else {
      console.log(result.error)
    }
  }

  return (
    <Dialog open={isEditingDialogOpen} onClose={handleClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <Box sx={{
         margin: "8px"
        }}>
          <form noValidate autoComplete="off" id="form" onSubmit={handleSave}>
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
                  defaultValue={editingTask.title}
                  inputRef={titleRef}
                  name="title"
                  variant="outlined"
                  required
                  size='small'
                  fullWidth
                />
                <TextField
                  label="Description"
                  defaultValue={editingTask.description}
                  inputRef={descriptionRef}
                  name="description"
                  variant="outlined"
                  required
                  size='small'
                  fullWidth
                />
              </Box>
            </Box>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="form">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
