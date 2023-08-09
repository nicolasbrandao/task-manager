import { Dialog, DialogTitle, Button, Box, TextField, DialogActions, DialogContent, Alert } from "@mui/material";
import { useUpdateTaskMutation } from "../store";
import { Task, TaskSchema } from "../entities/task";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  editingTask: Task,
  isEditingDialogOpen: boolean,
  handleClose: () => void
}

export default function EditTaskDialog({ editingTask, isEditingDialogOpen, handleClose }: Props) {
  const [updateTask] = useUpdateTaskMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<Task>({
    resolver: zodResolver(TaskSchema.strict().omit({ id: true })),
    defaultValues: {
      title: editingTask.title,
      description: editingTask.description
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updatedTask = {
      id: editingTask.id,
      title: data.title,
      description: data. description
    };
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
