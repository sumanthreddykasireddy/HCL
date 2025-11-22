import React from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useGoals } from "../context/GoalsContext";

export default function WellnessGoals() {
  const { labels, goals, submittedGoals, updateGoal, submit, reset } = useGoals();

  const handleChange = (index) => (e) => {
    updateGoal(index, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
    console.log("Submitted goals:", goals);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={600} mb={2}>
        Wellness Goals
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {goals.map((g, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <TextField
                  label={labels[i]}
                  value={g}
                  onChange={handleChange(i)}
                  fullWidth
                />
              </Grid>
            ))}

            <Grid item xs={12} sx={{ display: "flex", gap: 1 }}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button type="button" variant="outlined" onClick={handleReset}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {submittedGoals && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Submitted Goals
          </Typography>
          <List>
            {submittedGoals.map((g, idx) => (
              <ListItem key={idx}>
                <ListItemText
                  primary={`${labels[idx]}: ${g || "(not set)"}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}