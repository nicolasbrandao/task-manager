import { Dialog, DialogTitle, Button, Box, TextField, DialogActions, DialogContent, Alert } from "@mui/material";
import { RootState, toggleEditDialog, updateEditingTask, useUpdateTaskMutation } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { Task, TaskSchema } from "../lib/utils";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export default function EditTaskDialog() {
  const { isEditingDialogOpen, editingTask } = useSelector((state: RootState) => {
    return {
      isEditingDialogOpen: state.tasks.isEditingDialogOpen,
      editingTask: state.tasks.editingTask
    };
  });

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleEditDialog(false));
  };

  const [updateTask] = useUpdateTaskMutation();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Task>({
    resolver: zodResolver(TaskSchema.strict().omit({ id: true }))
  });

  useEffect(() => {
    setValue("title", editingTask.title);
    setValue("description", editingTask.description);
  }, [editingTask, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updatedTask = {
      id: editingTask.id,
      title: data.title,
      description: data. description
    };
    dispatch(updateEditingTask(updatedTask));
    updateTask(updatedTask);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={isEditingDialogOpen}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap:"4px"
        }}
      >
        <Box
          sx={{
            margin: "8px"
          }}
        >
          <form
            autoComplete="off"
            id="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box sx={{
              display: "flex",
              gap: "8px"
            }}
            >
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%",
              }}
              >
                <TextField
                  defaultValue={editingTask.title}
                  fullWidth
                  inputProps={{
                    ...register("title", { required: true, maxLength: 22 }),
                    "aria-invalid": errors.title ? "true" : "false"
                  }}
                  label="Title"
                  name="title"
                  size='small'
                  variant="outlined"
                />
                {errors.title && <Alert severity="error">{errors.title?.message}</Alert>}
                <TextField
                  defaultValue={editingTask.description}
                  fullWidth
                  inputProps={{
                    ...register("description", { required: true, maxLength: 80 }),
                    "aria-invalid": errors.description ? "true" : "false"
                  }}
                  label="Description"
                  multiline
                  name="description"
                  rows={4}
                  size='small'
                  variant="outlined"
                />
                {errors.description && <Alert severity="error">{errors.description?.message}</Alert>}
              </Box>
            </Box>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button form="form" type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
