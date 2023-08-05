import { Box, IconButton, TextField, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';


export default function AddTask() {
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
              variant="outlined"
              required
              size='small'
              fullWidth
            />
            <TextField
              label="Description"
              variant="outlined"
              required
              size='small'
              fullWidth
            />
          </Box>
          <Tooltip title="Create task">
            <IconButton aria-label="create task" size="large" sx={{borderRadius: '4px'}}>
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
