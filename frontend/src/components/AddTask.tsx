import { Alert, Box, IconButton, TextField, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useCreateTaskMutation } from "../store";
import { Task, TaskSchema } from "../lib/utils";
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddTask() {
  const [createTask] = useCreateTaskMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<Task>({
    resolver: zodResolver(TaskSchema.strict().omit({ id: true }))
  })
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { title, description } = data
    createTask({ title, description })
  }

  return (
    <Box sx={{
      margin: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
              size='small'
              fullWidth
              inputProps={{
                ...register("title", { required: true, maxLength: 22 }),
                "aria-invalid": errors.title ? "true" : "false"
              }}
            />
            {errors.title && <Alert severity="error">{errors.title?.message}</Alert>}
            <TextField
              label="Description"
              variant="outlined"
              size='small'
              fullWidth
              multiline
              rows={1}
              inputProps={{
                ...register("description", { required: true, maxLength: 80 }),
                "aria-invalid": errors.description ? "true" : "false"
              }}
            />
            {errors.description && <Alert severity="error">{errors.description?.message}</Alert>}
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
