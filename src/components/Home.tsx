import { Button, Card, Stack, Typography, Box } from "@mui/material";
import React from "react";

type Props = {
  onStart?: () => void;
};

export function Home({ onStart }: Props) {
  return (
    <Card>
      <Stack alignItems="center" justifyContent="center" spacing={1} p={1}>
        <Typography variant="h3" color="InfoText" component="div">
          💪
        </Typography>
        <Typography textAlign="center">
          Follow the daily excercise routine and ONLY do what is asked that day.
        </Typography>
        <Typography variant="caption" textAlign="center">
          Your settings are currently saved in a local session.
        </Typography>
        <Typography component="div" variant="body2">
          <ol>
            <li>Start with the easiest progression (default)</li>
            <li>
              Only move to the next progression when you can master the
              recommended sets with perfect form on the current progression.
            </li>
            <li>
              Do every excercise with intention. (Imagine mastering each move)
            </li>
            <li>Allow small break between exercises</li>
            <li>Each daily routine can be complete in 30-45 minutes.</li>
          </ol>
        </Typography>
        <Box pb={3}>
          <Button variant="contained" onClick={() => onStart && onStart()}>
            Start Today's Routine
          </Button>
        </Box>
      </Stack>
    </Card>
  );
}
