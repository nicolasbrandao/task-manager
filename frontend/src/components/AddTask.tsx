import { Alert, Box, IconButton, TextField, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCreateTaskMutation } from "../store";
import { Task, TaskSchema } from "../entities/task";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddTask() {
  const [createTask] = useCreateTaskMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<Task>({
    resolver: zodResolver(TaskSchema.strict().omit({ id: true }))
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { title, description } = data;
    createTask({ title, description });
  };

  return (
    <Box sx={{
      margin: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}
    >
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
              }}
              label="Title"
              size='small'
              variant="outlined"
            />
            {errors.title && <Alert severity="error">{errors.title?.message}</Alert>}
            <TextField
              fullWidth
              inputProps={{
                ...register("description", { required: true, maxLength: 80 }),
              }}
              label="Description"
              multiline
              rows={1}
              size='small'
              variant="outlined"
            />
            {errors.description && <Alert severity="error">{errors.description?.message}</Alert>}
          </Box>
          <Tooltip title="Create task">
            <IconButton
              aria-label="create task"
              size="large"
              sx={{borderRadius: "4px"}}
              type="submit"
            >
              <AddIcon
                fontSize="inherit"
                sx={{
                  color: "primary.main",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </form>
    </Box>
  );
}
