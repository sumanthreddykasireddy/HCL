import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function Messages() {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography>
          This is the Messages page. You can show patient messages,
          notifications, or chat history here.
        </Typography>
      </Paper>
    </Box>
  );
}
