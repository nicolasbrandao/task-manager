import "./AddTask.styles.css"
import { Box, Button, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';


export default function AddTask() {
  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        <Box sx={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
          width: "100%",
        }}>
          <TextField
            label="Title"
            variant="outlined"
            required
            size='small'
            color="warning"
            InputLabelProps={{style: {color: "var(--task-orange)"}}}
            fullWidth
            sx={{
              backgroundColor: "var(--task-gray-2)",
              borderRadius: "4px",
              input: {
                color: "var(--task-orange)"
              }
            }}
          />
          <TextField
            label="Description"
            variant="outlined"
            required
            size='small'
            color="warning"
            InputLabelProps={{style: {color: "var(--task-orange)"}}}
            fullWidth
            sx={{
              backgroundColor: "var(--task-gray-2)",
              borderRadius: "4px",
              input: {
                color: "var(--task-orange)"
              }
            }}
          />
        </Box>
        <Button color="warning" size="large" variant="contained">
          <AddIcon />
        </Button>
      </form>
    </div>
  )
}
