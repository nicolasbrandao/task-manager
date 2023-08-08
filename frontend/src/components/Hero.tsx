import { Box, Typography } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default function Hero() {
  return (
    <Box
      sx={{
        color: "primary.main",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        width: "fit-content",
        margin: "20px auto"
      }}
    >
      <AddTaskIcon sx={{
        height: "60px",
        width: "60px"
      }}
      />
      <Typography
        component="h1"
        variant="h3"
      >
        Task Manager
      </Typography>
    </Box>
  );
}
